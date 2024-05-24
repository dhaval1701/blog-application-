import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Img, Button, Switch, Input } from "../../components";
import HomePageMnewsletter from "../../components/HomePageMnewsletter";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "AuthContext";

const Layout = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/homepage");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full pt-8 gap-14">
          <header className="flex flex-row justify-between items-center w-full">
            <Img
              src="images/img_logo_gray_900.svg"
              alt="logo_one"
              className="h-9"
            />
            <div className="flex flex-row justify-start items-center w-full gap-[21px] mx-auto max-w-[942px]">
              <div className="flex flex-row justify-between w-[71%] px-[116px]">
                <div className="flex flex-row justify-center py-0.5">
                  <Link
                    to="/homepage"
                    style={{ color: "#87CEFA", textDecoration: "none" }}
                  >
                    <Text as="p">Home</Text>
                  </Link>
                </div>
                {/* <div className="flex flex-row justify-center">
                  <Link
                    to="/singlepost"
                    style={{ color: "#87CEFA", textDecoration: "none" }}
                  >
                    <Text as="p" className="mt-px">
                      Blog
                    </Text>
                  </Link>
                </div>
                <div className="flex flex-row justify-center">
                  <Link
                    to="/singlepost"
                    style={{ color: "#87CEFA", textDecoration: "none" }}
                  >
                    <Text as="p" className="mt-px">
                      Single Post
                    </Text>
                  </Link>
                </div> */}
                <div className="flex flex-row justify-center">
                  <Link
                    to="/bloglisting"
                    style={{ color: "#87CEFA", textDecoration: "none" }}
                  >
                    <Text as="p" className="mt-0.5">
                      Pages
                    </Text>
                  </Link>
                </div>
                <div className="flex flex-row justify-center py-0.5">
                  <Link
                    to="/authorpage"
                    style={{ color: "#87CEFA", textDecoration: "none" }}
                  >
                    <Text as="p">Contact</Text>
                  </Link>
                </div>
                <div className="flex flex-row justify-center py-0.5">
                  {!currentUser ? (
                    <Link
                      to="/login"
                      style={{ color: "#87CEFA", textDecoration: "none" }}
                    >
                      <Text as="p">Login</Text>
                    </Link>
                  ) : null}
                </div>
                <div className="flex flex-row justify-center py-0.5">
                  {currentUser != null ? (
                    <>
                      <button onClick={handleLogout}>
                        {" "}
                        <Text as="p">Logout</Text>
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[27%]">
                {/* <Input
                  color="gray_100_01"
                  size="xs"
                  name="search"
                  placeholder="Search"
                  value={searchBarValue4}
                  onChange={(e) => setSearchBarValue4(e)}
                  suffix={
                    searchBarValue4?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue4("")}
                        height={16}
                        width={16}
                        fillColor="#52525bff"
                      />
                    ) : (
                      <Img
                        src="images/img_searchoutline.svg"
                        alt="search-outline"
                        className="cursor-pointer"
                      />
                    )
                  }
                  className="w-[66%] text-gray-500_01 font-inter"
                /> */}
                {/* <Switch className="w-[19%]" /> */}
                {currentUser ? (
                  <Text as="p" style={{ color: "red" }}>
                    {currentUser.displayName}
                  </Text>
                ) : null}
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <Outlet />
            <footer className="flex flex-col items-center justify-center w-full pt-[63px] px-14 border-gray-200 border-t border-solid bg-gray-100">
              <div className="flex flex-col items-center justify-center w-full gap-16 mx-auto max-w-[1216px]">
                <div className="flex flex-row justify-start items-start w-full gap-5">
                  <div className="flex flex-col items-start justify-start w-[24%] gap-6">
                    <div className="flex flex-col items-start justify-start pt-0.5 gap-3.5">
                      <Heading
                        size="s"
                        as="h6"
                        className="!font-plusjakartasans"
                      >
                        About
                      </Heading>
                      <Text
                        as="p"
                        className="!text-gray-600 !font-plusjakartasans !leading-6"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Heading
                        size="xs"
                        as="h6"
                        className="mt-[3px] !font-plusjakartasans"
                      >
                        <span className="text-gray-900_01">Email : </span>
                        <span className="text-gray-800 font-normal">
                          info@jstemplate.net
                        </span>
                      </Heading>
                      <Heading
                        size="xs"
                        as="h6"
                        className="!font-plusjakartasans"
                      >
                        <span className="text-gray-900_01">Phone : </span>
                        <span className="text-gray-800 font-normal">
                          880 123 456 789
                        </span>
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-[41%] px-[118px]">
                    <div className="flex flex-col items-start justify-start w-[35%] pt-[3px] gap-[25px]">
                      <Heading
                        size="s"
                        as="h6"
                        className="!font-plusjakartasans"
                      >
                        Quick Link
                      </Heading>
                      <div className="flex flex-col items-center justify-center w-3/4">
                        <ul className="flex flex-col items-start justify-start w-full mt-0.5 gap-2.5">
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Home
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                About
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Blog
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Archived
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Author
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Contact
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[35%] pt-1 gap-6">
                      <Heading
                        size="s"
                        as="h6"
                        className="!font-plusjakartasans"
                      >
                        Category
                      </Heading>
                      <div className="flex flex-col items-center justify-start w-full pt-1">
                        <ul className="flex flex-col items-start justify-start w-full gap-2.5">
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Lifestyle
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Technology
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Travel
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Business
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Economy
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!font-plusjakartasans">
                                Sports
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <HomePageMnewsletter className="flex flex-col items-center justify-start w-[33%] gap-[30px] p-8 bg-white-A700 rounded-[12px]" />
                </div>
                <div className="flex flex-row justify-between items-center w-full pt-[31px] pb-8 border-gray-300 border-t border-solid">
                  <div className="flex flex-row justify-start items-center w-[30%] gap-2.5">
                    <Img
                      src="images/img_logo.svg"
                      alt="logo_three"
                      className="h-12 w-12"
                    />
                    <div className="flex flex-col items-start justify-start w-[85%] pt-[3px] gap-1">
                      <Heading
                        size="md"
                        as="h5"
                        className="!text-gray-900 !font-plusjakartasans !font-bold"
                      >
                        <span className="text-gray-900 font-normal">Meta</span>
                        <span className="text-gray-900 font-extrabold">
                          Blog
                        </span>
                      </Heading>
                      <Text as="p" className="!font-plusjakartasans">
                        <span className="text-gray-800">© </span>
                        <span className="text-gray-900">JS Template</span>
                        <span className="text-gray-800">
                          2023. All Rights Reserved.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[65%] pl-[419px] gap-4">
                    <div className="flex flex-row justify-start w-[27%]">
                      <a href="#">
                        <Text as="p" className="!font-plusjakartasans">
                          Terms of Use
                        </Text>
                      </a>
                    </div>
                    <div className="h-6 w-px bg-gray-200" />
                    <div className="flex flex-row justify-start w-[29%]">
                      <a href="#">
                        <Text as="p" className="!font-plusjakartasans">
                          Privacy Policy
                        </Text>
                      </a>
                    </div>
                    <div className="h-6 w-px bg-gray-200" />
                    <div className="flex flex-row justify-start w-[29%]">
                      <a href="#">
                        <Text as="p" className="!font-plusjakartasans">
                          Cookie Policy
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
