import React from "react";
import { Text, Heading, Img, Button, Input } from "./..";

export default function BlogListingOfooter({
  about = "About",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  email,
  phone,
  quicklink = "Quick Link",
  homeTwo = "Home",
  aboutOne = "About",
  blogOne = "Blog",
  archived = "Archived",
  authorOne = "Author",
  contactOne = "Contact",
  category = "Category",
  lifestyle = "Lifestyle",
  technology = "Technology",
  travel = "Travel",
  business = "Business",
  economy = "Economy",
  sports = "Sports",
  weekly = "Weekly Newsletter",
  getblog = "Get blog articles and offers via email",
  subscribe = "Subscribe",
  metablog,
  jstemplate,
  termsofuse = "Terms of Use",
  privacypolicy = "Privacy Policy",
  cookiepolicy = "Cookie Policy",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-16 max-w-[1216px]">
        <div className="flex flex-row justify-start items-start w-full gap-5">
          <div className="flex flex-col items-start justify-start w-[24%] gap-6">
            <div className="flex flex-col items-start justify-start pt-0.5 gap-3.5">
              <Heading size="s" as="h1" className="!font-plusjakartasans">
                {about}
              </Heading>
              <Text as="p" className="!text-gray-600 !font-plusjakartasans !leading-6">
                {description}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px]">
              <Heading size="xs" as="h2" className="mt-[3px] !font-plusjakartasans">
                <span className="text-gray-900_01">Email : </span>
                <span className="text-gray-800 font-normal">info@jstemplate.net</span>
              </Heading>
              <Heading size="xs" as="h3" className="!font-plusjakartasans">
                <span className="text-gray-900_01">Phone : </span>
                <span className="text-gray-800 font-normal">880 123 456 789</span>
              </Heading>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[41%] px-[118px]">
            <div className="flex flex-col items-start justify-start w-[35%] pt-[3px] gap-[25px]">
              <Heading size="s" as="h4" className="!font-plusjakartasans">
                {quicklink}
              </Heading>
              <div className="flex flex-col items-center justify-center w-3/4">
                <ul className="flex flex-col items-start justify-start w-full mt-0.5 gap-2.5">
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {homeTwo}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {aboutOne}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {blogOne}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {archived}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {authorOne}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {contactOne}
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[35%] pt-1 gap-6">
              <Heading size="s" as="h5" className="!font-plusjakartasans">
                {category}
              </Heading>
              <div className="flex flex-col items-center justify-start w-full pt-1">
                <ul className="flex flex-col items-start justify-start w-full gap-2.5">
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {lifestyle}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {technology}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {travel}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {business}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {economy}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!font-plusjakartasans">
                        {sports}
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[33%] gap-[30px] p-8 bg-white-A700 rounded-[12px]">
            <div className="flex flex-col items-center justify-start w-[89%] gap-[9px]">
              <Heading size="md" as="h6" className="text-center">
                {weekly}
              </Heading>
              <Text as="p" className="!text-gray-600 text-center">
                {getblog}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[98%] gap-2">
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
        </div>
        <div className="flex flex-row justify-between items-center w-full pt-[31px] pb-8 border-gray-300 border-t border-solid">
          <div className="flex flex-row justify-start items-center w-[30%] gap-2.5">
            <Img src="images/img_logo_indigo_a200.svg" alt="logo_three" className="h-12 w-12" />
            <div className="flex flex-col items-start justify-start w-[85%] pt-[3px] gap-1">
              <Heading size="md" as="h2" className="!text-gray-900 !font-plusjakartasans !font-bold">
                <span className="text-gray-900 font-normal">Meta</span>
                <span className="text-gray-900 font-extrabold">Blog</span>
              </Heading>
              <Text as="p" className="!font-plusjakartasans">
                <span className="text-gray-800">© </span>
                <span className="text-gray-900">JS Template</span>
                <span className="text-gray-800">2023. All Rights Reserved.</span>
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-[65%] pl-[419px] gap-4">
            <div className="flex flex-row justify-start w-[27%]">
              <a href="#">
                <Text as="p" className="!font-plusjakartasans">
                  {termsofuse}
                </Text>
              </a>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex flex-row justify-start w-[29%]">
              <a href="#">
                <Text as="p" className="!font-plusjakartasans">
                  {privacypolicy}
                </Text>
              </a>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex flex-row justify-start w-[29%]">
              <a href="#">
                <Text as="p" className="!font-plusjakartasans">
                  {cookiepolicy}
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
