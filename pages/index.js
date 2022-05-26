import React, { useState } from "react";
import Cart from "../components/cart";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RestaurantList from "../components/restaurantList";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://23.22.215.140";
  console.log(`URL: ${API_URL}`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  return (
    <ApolloProvider client={client}>
      <div className="search">
        <h2 className="text-lg font-weight-bold my-2">
          Search Local Restaurants:
        </h2>
        <InputGroup>
          <InputGroupAddon addonType="append"> Search </InputGroupAddon>
          <Input
            placeholder="Search restaurant..."
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
      <RestaurantList search={query} />
      <Cart> </Cart>
    </ApolloProvider>
  );
}
export default Home;
