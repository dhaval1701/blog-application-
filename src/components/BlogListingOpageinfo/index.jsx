import React from "react";
import { Text, Heading } from "./..";

export default function BlogListingOpageinfo({
  pagetitle = "Page TItle",
  homeOne = "Home",
  linkone = "Link One",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-[13%] pt-0.5 gap-[5px] mx-[518px]">
        <Heading size="xl" as="h1" className="text-center">
          {pagetitle}
        </Heading>
        <div className="flex flex-row justify-start items-center w-full gap-3 max-w-[139px]">
          <a href="#">
            <Text as="p" className="text-center">
              {homeOne}
            </Text>
          </a>
          <div className="flex flex-row justify-start items-center w-[59%] gap-[11px]">
            <div className="h-4 w-px bg-gray-200" />
            <Text as="p" className="!text-gray-600 text-center">
              {linkone}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
