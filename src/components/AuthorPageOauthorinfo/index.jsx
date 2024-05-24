import React from "react";
import { Button, Img, Text } from "./..";

export default function AuthorPageOauthorinfo({
  jonathandoe = "Jonathan Doe",
  collaborator = "Collaborator & Editor",
  description = "Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-1/5 gap-4">
        <Img src="images/img_image_64x64.png" alt="image_one" className="h-16 w-16 rounded-[50%]" />
        <div className="flex flex-col items-center justify-start w-[65%] gap-[3px]">
          <Text size="lg" as="p" className="!text-gray-900_01 !font-medium">
            {jonathandoe}
          </Text>
          <Text size="xs" as="p" className="!text-gray-600">
            {collaborator}
          </Text>
        </div>
      </div>
      <Text size="md" as="p" className="w-3/5 text-center !leading-[26px]">
        {description}
      </Text>
      <div className="flex flex-row justify-between w-[14%]">
        <Button color="gray_600" size="sm" className="w-8">
          <Img src="images/img_logo_facebook.svg" />
        </Button>
        <Button color="gray_600" size="sm" className="w-8">
          <Img src="images/img_logo_twitter.svg" />
        </Button>
        <Button color="gray_600" size="sm" className="w-8">
          <Img src="images/img_logo_instagram.svg" />
        </Button>
        <Button color="gray_600" size="sm" className="w-8">
          <Img src="images/img_logo_youtube.svg" />
        </Button>
      </div>
    </div>
  );
}
