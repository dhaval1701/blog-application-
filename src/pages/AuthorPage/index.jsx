import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, Input } from "../../components";
import AuthorPageOauthorinfo from "../../components/AuthorPageOauthorinfo";
import Header from "../../components/Header";

export default function AuthorPagePage() {
  return (
    <>
      <Helmet>
        <title>Blog Application </title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-col items-center justify-start w-full gap-[47px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <AuthorPageOauthorinfo className="flex flex-col items-center justify-start w-full gap-6 p-12 bg-gray-100 max-w-[1216px] rounded-[12px]" />
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[31px] max-w-[1216px]">
              <div className="flex flex-row justify-start w-full">
                <Heading as="h1" className="!font-bold">
                  Latest Post
                </Heading>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h2">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[89%] gap-5">
                        <div className="flex flex-row justify-start items-center w-[52%] gap-3">
                          <Img
                            src="images/img_image_1.png"
                            alt="tracey_wilson"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Tracey Wilson
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_240x360.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h3">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[94%] gap-5">
                        <div className="flex flex-row justify-start items-start w-[55%] gap-3">
                          <Img
                            src="images/img_image_36x36.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Jason Francisco
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_1.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h4">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[94%] gap-5">
                        <div className="flex flex-row justify-start items-start w-[55%] gap-3">
                          <Img
                            src="images/img_image_2.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Elizabeth Slavin
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_2.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h5">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[84%] gap-5">
                        <div className="flex flex-row justify-start items-start w-1/2 gap-3">
                          <Img
                            src="images/img_image_3.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Ernie Smith
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_3.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h6">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[81%] gap-5">
                        <div className="flex flex-row justify-start items-start w-[48%] gap-3">
                          <Img
                            src="images/img_image_4.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Eric Smith
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_4.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h4">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[89%] gap-5">
                        <div className="flex flex-row justify-start items-center w-[52%] gap-3">
                          <Img
                            src="images/img_image_1.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Tracey Wilson
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_5.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h4">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[94%] gap-5">
                        <div className="flex flex-row justify-start items-start w-[55%] gap-3">
                          <Img
                            src="images/img_image_36x36.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Jason Francisco
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_6.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h4">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[94%] gap-5">
                        <div className="flex flex-row justify-start items-start w-[55%] gap-3">
                          <Img
                            src="images/img_image_2.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Elizabeth Slavin
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]">
                    <Img
                      src="images/img_rectangle_38_7.png"
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          Technology
                        </Button>
                        <Heading as="h4">
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[84%] gap-5">
                        <div className="flex flex-row justify-start items-start w-1/2 gap-3">
                          <Img
                            src="images/img_image_3.png"
                            alt="image_two"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href="#" className="mt-[7px]">
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              Ernie Smith
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          August 20, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
