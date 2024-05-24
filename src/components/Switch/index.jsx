import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtFillGray200: {
    offColor: "#e8e8ea",
    onColor: "#e8e8ea",
    offHandleColor: "#ffffff",
    onHandleColor: "#ffffff",
    boxShadow: "0px 1px  2px 0px #0000001e",
  },
};
const sizes = {
  xs: {
    width: 56,
    height: 28,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillGray200",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtFillGray200"]),
};

export { Switch };
