import React from "react";

const sizes = {
  "2xl": "text-4xl font-semibold leading-10",
  xl: "text-3xl font-semibold leading-9",
  s: "text-lg font-semibold leading-[23px]",
  md: "text-xl font-semibold leading-6",
  xs: "text-base font-semibold leading-[21px]",
  lg: "text-2xl font-semibold leading-7",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-worksans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
