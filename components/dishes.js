import { gql, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Dishes({ restId }) {
  const [restaurantID, setRestaurantID] = useState();
  const { addItem } = useContext(AppContext);

  const GET_RESTAURANT_DISHES = gql`
    query ($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0) {
    return (
      <>
        <div>
          <div className="text-lg font-weight-bold my-2">Dishes:</div>
          <div className="flex flex-row flex-wrap	">
            {restaurant.dishes.map((res, idx) => (
              <div className="w-1/2 px-2" key={idx}>
                <Card style={{ margin: "0 10px" }}>
                  <CardBody>
                    <div className="flex">
                      <div className="flex-grow-0 flex-shrink-0">
                        <CardImg
                          top={true}
                          className="object-cover"
                          style={{ height: 150, width: 130 }}
                          src={`http://23.22.215.140${res.image.url}`}
                        />
                      </div>
                      <div className="flex-grow-1 flex-shrink-1 px-3">
                        <CardTitle>
                          <div className="font-weight-bold">{res.name}</div>
                        </CardTitle>
                        <CardText>{res.description}</CardText>
                      </div>
                    </div>
                  </CardBody>
                  <div className="card-footer">
                    <Button color="info" onClick={() => addItem(res)}>
                      + Add To Cart
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}
export default Dishes;
