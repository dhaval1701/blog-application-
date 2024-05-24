import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, Input } from "../../components";
import BlogListingOadsspace from "../../components/BlogListingOadsspace";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useAuth } from "AuthContext";
import { db } from "firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  setDoc,
  doc,
  collectionGroup,
  getDoc,
} from "firebase/firestore";
import dayjs from "dayjs";

export default function SinglePostPage() {
  const { currentUser } = useAuth();

  const userId = currentUser?.uid;
  const { id } = useParams(); // Assuming you're using react-router-dom
  const [blogPost, setBlogPost] = useState(null);

  const getBlogById = async () => {
    try {
      const querySnapshot = await getDocs(collectionGroup(db, "blogs"));

      querySnapshot.forEach((doc) => {
        if (doc.exists() && doc.id === id) {
          // Blog document exists with the specified ID
          const blogData = doc.data();
          console.log("Blog data:", blogData);
          setBlogPost(blogData);
        }
      });
    } catch (error) {
      console.error("Error getting blog document:", error);
      throw error;
    }
  };

  useEffect(() => {
    // const fetchBlogPost = async () => {
    //   // const blogDocRef = doc(db, "usersBlogs", userId, "blogs", id);
    //   const blogDocRef = doc(db, "blogs", id);

    //   try {
    //     const blogDocSnapshot = await getDoc(blogDocRef);

    //     if (blogDocSnapshot.exists()) {
    //       // Blog document exists, you can access its data
    //       const blogData = blogDocSnapshot.data();
    //       console.log("Blog data:", blogData);
    //       return blogData;
    //     } else {
    //       console.log("No such blog document!");
    //       return null;
    //     }
    //   } catch (error) {
    //     console.error("Error getting blog document:", error);
    //     throw error;
    //   }
    // };

    getBlogById();

    // Clean up the useEffect
    return () => {
      // Any cleanup logic can go here
    };
  }, [id]);

  console.log(blogPost);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

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
        <div className="flex flex-col items-center justify-start w-full gap-8">
          <div className="flex flex-col items-center justify-start w-full gap-20">
            <div className="flex flex-col items-center justify-start w-[42%]">
              <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <div className="flex flex-col items-start justify-start w-full gap-4">
                      <Button
                        color="indigo_A200"
                        size="md"
                        className="font-medium min-w-[101px]"
                      >
                        {blogPost.category}
                      </Button>
                      <Heading size="2xl" as="h1">
                        {blogPost.mainHeading}
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[34%] gap-6">
                      <div className="flex flex-row justify-start items-center w-1/2 gap-2">
                        <Img
                          src="images/img_image_28x28.png"
                          alt="image_one"
                          className="h-7 w-7 rounded-[50%]"
                        />
                        <a href="#">
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-600 !font-medium"
                          >
                            {blogPost.author}
                          </Text>
                        </a>
                      </div>
                      <Text size="xs" as="p" className="!text-gray-600">
                        {blogPost.createdAt}
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_image_462x800.png"
                    alt="image_three"
                    className="w-full object-cover rounded-[12px]"
                  />
                  <div className="flex flex-row justify-center w-full">
                    <Text size="lg" as="p" className="!font-sourceserifpro">
                      {blogPost.introduction}
                    </Text>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    {Object.keys(blogPost.topicList).map((topicKey, index) => {
                      const topic = blogPost.topicList[topicKey];
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start justify-start w-full gap-[13px]"
                        >
                          <Heading as="h2">{topic.heading}</Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-sourceserifpro"
                          >
                            <br />
                            {topic.content}
                          </Text>
                        </div>
                      );
                    })}
                  </div>

                  <Img
                    src="images/img_image_6.png"
                    alt="image_five"
                    className="w-full object-cover rounded-[12px]"
                  />
                  <BlogListingOadsspace className="flex flex-col items-center justify-start w-full gap-px p-4 bg-gray-200 max-w-[750px] rounded-[12px]" />
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <Heading as="h4">Conclusion:</Heading>
                    <Text size="lg" as="p" className="!font-sourceserifpro">
                      {blogPost.conclusion}
                    </Text>
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
