import React from "react";

const Container = (props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {props.children}
    </div>
  );
};

export default Container;
