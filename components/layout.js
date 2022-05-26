/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";

const Layout = (props) => {
  const title = "Good Restaurant";
  let user = "";
  if (typeof window !== "undefined") {
    user = window.localStorage.getItem("username");
  }

  const logout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Restaurant App</a>
            </Link>
          </NavItem>
          <NavItem className="ml-auto">
            {!!user ? (
              <h5 className="p-0 text-xl">{user}</h5>
            ) : (
              <Link href="/register">
                <a className="nav-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
                  Sign up
                </a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {!!user ? (
              <Link href="/">
                <a
                  className="nav-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => logout()}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign in
                </a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
