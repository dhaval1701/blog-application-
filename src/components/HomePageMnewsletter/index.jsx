import React from "react";
import { Button, Input, Img, Text, Heading } from "./..";

export default function HomePageMnewsletter({
  weekly = "Weekly Newsletter",
  getblog = "Get blog articles and offers via email",
  subscribe = "Subscribe",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-[9px] max-w-[289px]">
        <Heading size="md" as="h1" className="text-center">
          {weekly}
        </Heading>
        <Text as="p" className="!text-gray-600 text-center">
          {getblog}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-2 max-w-xs">
        <Input
          name="email"
          placeholder="Your Email"
          suffix={<Img src="images/img_mail.svg" alt="mail" />}
          className="w-full border-gray-300 border border-solid !rounded-md"
        />
        <Button color="indigo_A200" size="lg" className="w-full font-medium">
          {subscribe}
        </Button>
      </div>
    </div>
  );
}
