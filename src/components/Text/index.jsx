import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[17px]",
  lg: "text-xl font-normal leading-8",
  s: "text-base font-normal leading-[19px]",
  xl: "text-2xl font-normal leading-8",
  md: "text-lg font-normal leading-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-worksans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
