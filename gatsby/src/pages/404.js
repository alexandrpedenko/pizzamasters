import React from "react";
import SEO from "../components/SEO";

function ErrorPage() {
  return (
    <div className='err'>
      <SEO title='404 Page not Found'></SEO>
      <h1>Page Not Found!</h1>
    </div>
  );
}

export default ErrorPage;
