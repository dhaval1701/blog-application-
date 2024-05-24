import React from "react";
import { Text, Heading } from "./..";

export default function BlogListingOadsspace({
  advertisement = "Advertisement",
  youcanplace = "You can place ads",
  p750x100 = "750x100",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="xs" as="p" className="!text-gray-600 text-center">
        {advertisement}
      </Text>
      <Heading size="md" as="h1" className="!text-gray-600 text-center">
        {youcanplace}
      </Heading>
      <Text size="md" as="p" className="!text-gray-600 text-center">
        {p750x100}
      </Text>
    </div>
  );
}
