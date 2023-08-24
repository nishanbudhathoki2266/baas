import { Children, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <div className="font-openSans">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
