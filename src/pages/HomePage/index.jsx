import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Img, Button, Switch, Input } from "../../components";
import HomePageMnewsletter from "../../components/HomePageMnewsletter";
import CheckboxDrawer from "pages/antd-drawer";
import UserListDrawer from "pages/manage-user-drawer";
import LineChart from "pages/react-apex-chart";

export default function HomePagePage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [dataList, setDataList] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
  ]);

  const handleDrawerClose = (checkedItems) => {
    if (checkedItems.length > 0) {
      setCheckedItems([...checkedItems]);
      console.log("Checked Items:", checkedItems);
    } else {
      console.log("No items have been selected.");
    }
    setIsVisible(false); // Close the drawer
  };

  const onClose = (checkedItems) => {
    setIsVisible(false);
  };

  console.log(checkedItems);

  return (
    <>
      {/* <div>
        <button onClick={() => setIsVisible(true)}>Open Drawer</button>
        <CheckboxDrawer
          isVisible={isVisible}
          onClose={handleDrawerClose}
          dataList={dataList}
          setDataList={setDataList}
        />
      </div> */}
      <div>
        <button onClick={() => setIsVisible(true)}>Open UserList Drawer</button>
        <UserListDrawer isVisible={isVisible} onClose={onClose} />
      </div>

      <div className="w-3/4">
        <LineChart />
      </div>
      {/* <div className="flex flex-col items-center justify-start w-full gap-[100px]">
        <div className="flex flex-col items-center justify-start w-full gap-20 max-w-[1216px]">
          <div className="h-[664px] w-full relative">
            <Img
              src="images/img_image.png"
              alt="image_one"
              className="h-[600px] w-full top-0 right-0 left-0 m-auto object-cover absolute rounded-[12px]"
            />
            <div className="flex flex-col items-start justify-start w-1/2 gap-6 bottom-0 left-[5%] p-[39px] m-auto border-gray-200 border border-solid bg-white-A700 shadow-sm absolute rounded-[12px]">
              <div className="flex flex-col items-start justify-start gap-4">
                <Button
                  color="indigo_A200"
                  className="font-medium min-w-[97px]"
                >
                  Technology
                </Button>
                <Heading size="2xl" as="h1">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center w-[62%] gap-5">
                <div className="flex flex-row justify-start items-start w-[55%] gap-3">
                  <Img
                    src="images/img_image_36x36.png"
                    alt="image_three"
                    className="h-9 w-9 rounded-[50%]"
                  />
                  <a href="#" className="mt-[7px]">
                    <Text as="p" className="!text-gray-500 !font-medium">
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
          <div className="flex flex-col items-center justify-start w-full gap-[79px]">
            <div className="flex flex-col items-center justify-start w-[62%] gap-px p-4 bg-gray-200 rounded-[12px]">
              <Text size="xs" as="p" className="!text-gray-600 text-center">
                Advertisement
              </Text>
              <Heading size="md" as="h2" className="!text-gray-600 text-center">
                You can place ads
              </Heading>
              <Text size="md" as="p" className="!text-gray-600 text-center">
                750x100
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[31px]">
              <div className="flex flex-row justify-start w-full">
                <Heading as="h3" className="!font-bold">
                  Latest Post
                </Heading>
              </div>
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
                      <Heading as="h4">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                      <Heading as="h5">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                      <Heading as="h6">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                      <Heading as="h4">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
                          <Text as="p" className="!text-gray-500 !font-medium">
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
              <Button
                color="gray_600_4c"
                size="lg"
                variant="outline"
                className="font-medium min-w-[142px]"
              >
                View All Post
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[62%] gap-px p-4 bg-gray-200 rounded-[12px]">
            <Text size="xs" as="p" className="!text-gray-600 text-center">
              Advertisement
            </Text>
            <Heading size="md" as="h5" className="!text-gray-600 text-center">
              You can place ads
            </Heading>
            <Text size="md" as="p" className="!text-gray-600 text-center">
              750x100
            </Text>
          </div>
        </div>
      </div> */}
    </>
  );
}
