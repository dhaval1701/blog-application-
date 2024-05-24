import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";
import { db } from "firebase";
import { useAuth } from "AuthContext";
import {
  collection,
  addDoc,
  getDocs,
  query,
  setDoc,
  doc,
  collectionGroup,
} from "firebase/firestore";
import { Link } from "react-router-dom";

// const blogPosts = [
//   {
//     image: "images/img_rectangle_38.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_1.png",
//     author: "Tracey Wilson",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_240x360.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_36x36.png",
//     author: "Jason Francisco",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_1.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_2.png",
//     author: "Elizabeth Slavin",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_2.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_3.png",
//     author: "Ernie Smith",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_3.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_4.png",
//     author: "Eric Smith",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_4.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_1.png",
//     author: "Tracey Wilson",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_5.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_36x36.png",
//     author: "Jason Francisco",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_6.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_2.png",
//     author: "Elizabeth Slavin",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   {
//     image: "images/img_rectangle_38_7.png",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     authorImage: "images/img_image_3.png",
//     author: "Ernie Smith",
//     authorLink: "#",
//     date: "August 20, 2022",
//   },
//   // Add more blog post objects here as needed
// ];

export default function BlogListingPage() {
  const [Posts, setPosts] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    // Function to fetch data from Firestore
    const getFirestoreData = async () => {
      try {
        const blogsQuerySnapshot = await getDocs(collectionGroup(db, "blogs"));

        // Define an array to store all blogs
        const allBlogs = [];

        // Iterate over each blog document
        blogsQuerySnapshot.forEach((blogDoc) => {
          // Extract blog data and add it to the array
          allBlogs.push({
            userId: blogDoc.ref.parent.parent.id,
            blogId: blogDoc.id,
            data: blogDoc.data(),
          });
        });

        console.log(allBlogs);

        setPosts(allBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function to fetch data when the component mounts
    getFirestoreData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  console.log(Posts);

  const generateBlog = Posts.map((post) => {
    // Map categories to corresponding images
    const categoryImages = {
      Technology: "images/img_rectangle_38_5.png",
      Lifestyle: "images/img_rectangle_38_240x360.png",
      Travel: "images/img_rectangle_38_1.png",
      Business: "images/img_rectangle_38_5.png",
      Economy: "images/img_rectangle_38_7.png",
      Sports: "images/img_rectangle_38_3.png",
      // Add mappings for other categories if needed
    };

    // Select image based on the category
    const image = categoryImages[post.data.category] || ""; // Use default image if category not found

    return {
      blogId: post.blogId,
      image: image,
      category: post.data.category,
      title: post.data.mainHeading,
      authorImage: "images/img_default_author.png",
      author: post?.data.author,
      authorLink: "#",
      date: post.data.createdAt,
    };
  });

  // Array of available author images
  const images = [
    "images/img_rectangle_38.png",
    "images/img_rectangle_38_240x360.png",
    "images/img_rectangle_38_240x360.png",
    "images/img_rectangle_38_1.png",
    "images/img_rectangle_38_3.png",
    "images/img_rectangle_38_4.png",
    "images/img_rectangle_38_5.png",
    "images/img_rectangle_38_6.png",
    "images/img_rectangle_38_7.png",
    // Add more image paths as needed
  ];

  return (
    <>
      <Helmet>
        <title>Blog Application </title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-12">
        <div className="flex flex-col items-start justify-start h-[450px] w-full gap-6 p-10 bg-gray-900_66 bg-[url(/public/images/img_m_post_card_overlay.png)] bg-cover bg-no-repeat max-w-[1216px] rounded-[12px]">
          <div className="flex flex-col items-start justify-start mt-[186px] gap-4">
            <Button color="indigo_A200" className="font-medium min-w-[97px]">
              Technology
            </Button>
            <Heading size="2xl" as="h1" className="w-[64%] !text-white-A700">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </Heading>
          </div>
          <div className="flex flex-row justify-start items-center w-[27%] gap-5">
            <div className="flex flex-row justify-start items-center w-[52%] gap-3">
              <Img
                src="images/img_image_5.png"
                alt="image_one"
                className="h-9 w-9 rounded-[50%]"
              />
              <a href="#">
                <Text as="p" className="!text-white-A700 !font-medium">
                  Dhaval Panchal
                </Text>
              </a>
            </div>
            <Text as="p" className="!text-white-A700">
              August 20, 2022
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-20">
          <div className="flex flex-col items-center justify-start w-full gap-8 max-w-[1216px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                {generateBlog.map((post, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-gray-200 border border-solid bg-white-A700 rounded-[12px]"
                  >
                    <Img
                      src={post.image}
                      alt="image"
                      className="w-full object-cover rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-5 p-2">
                      <div className="flex flex-col items-start justify-start gap-4">
                        <Button className="font-medium min-w-[97px]">
                          {post.category}
                        </Button>
                        <Link
                          to={`/singlepost/${post.blogId}`}
                          className="text-blue-500 hover:underline"
                        >
                          <Heading as="h2">{post.title}</Heading>
                        </Link>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[89%] gap-5">
                        <div className="flex flex-row justify-start items-center w-[52%] gap-3">
                          <Img
                            src={post.authorImage}
                            alt="author"
                            className="h-9 w-9 rounded-[50%]"
                          />
                          <a href={post.authorLink}>
                            <Text
                              as="p"
                              className="!text-gray-500 !font-medium"
                            >
                              {post.author}
                            </Text>
                          </a>
                        </div>
                        <Text as="p" className="!text-gray-500">
                          {post.date}
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              color="gray_600_4c"
              size="lg"
              variant="outline"
              className="font-medium min-w-[123px]"
              // onClick={loadMorePosts}
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
