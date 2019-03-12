import React from "react";

const Icon = ({ name, customClassName = "", ...rest }) => {
  return (
    <svg className={`icon ${name} ${customClassName}`} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
