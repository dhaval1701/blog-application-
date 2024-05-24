import React from "react";
import { CloseSVG } from "../../assets/images";
import { Switch, Input, Text, Img } from "./..";

export default function BlogListingOnavbar({
  home = "Home",
  blog = "Blog",
  singlepost = "Single Post",
  pages = "Pages",
  contact = "Contact",
  ...props
}) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <div {...props}>
      <Img src="images/img_logo_gray_900.svg" alt="logo_one" className="h-9 ml-[318px]" />
      <div className="flex flex-row justify-start items-center w-[51%] mr-[318px] gap-[21px]">
        <div className="flex flex-row justify-between w-[71%] px-[116px]">
          <div className="flex flex-row justify-center py-0.5">
            <a href="#">
              <Text as="p">{home}</Text>
            </a>
          </div>
          <div className="flex flex-row justify-center">
            <Text as="p" className="mt-px">
              {blog}
            </Text>
          </div>
          <div className="flex flex-row justify-center">
            <Text as="p" className="mt-px">
              {singlepost}
            </Text>
          </div>
          <div className="flex flex-row justify-center">
            <Text as="p" className="mt-0.5">
              {pages}
            </Text>
          </div>
          <div className="flex flex-row justify-center py-0.5">
            <a href="#">
              <Text as="p">{contact}</Text>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-[27%]">
          <Input
            color="gray_100_01"
            size="xs"
            name="search"
            placeholder="Search"
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#52525bff" />
              ) : (
                <Img src="images/img_searchoutline.svg" alt="search-outline" className="cursor-pointer" />
              )
            }
            className="w-[66%] text-gray-500_01 font-inter"
          />
          <Switch className="w-[19%]" />
        </div>
      </div>
    </div>
  );
}
