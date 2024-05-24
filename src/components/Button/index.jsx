import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};
const variants = {
  outline: {
    gray_600_4c: "border-gray-600_4c border border-solid text-gray-600",
  },
  fill: {
    gray_600: "bg-gray-600",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    indigo_A200_0c: "bg-indigo-A200_0c text-indigo-A200",
  },
};
const sizes = {
  md: "h-8 px-3 text-sm",
  sm: "h-8 px-2",
  lg: "h-12 px-5 text-base",
  xs: "h-7 px-2.5 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xs",
  color = "indigo_A200_0c",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer rounded-md ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "lg", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_600_4c", "gray_600", "indigo_A200", "indigo_A200_0c"]),
};

export { Button };
