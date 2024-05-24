import { useAuth } from "AuthContext";
import { db } from "firebase";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  setDoc,
  doc,
  collectionGroup,
} from "firebase/firestore";
import dayjs from "dayjs";

const categories = [
  "Lifestyle",
  "Technology",
  "Travel",
  "Business",
  "Economy",
  "Sports",
];

const topics = [1, 2, 3, 4, 5];

const AuthorForm = () => {
  const { currentUser } = useAuth();
  const [mainHeading, setMainHeading] = useState("");
  const [category, setCategory] = useState("");
  const [numTopics, setNumTopics] = useState(1);
  const [topicHeadings, setTopicHeadings] = useState([""]);
  const [topicContents, setTopicContents] = useState([""]);
  const [conclusion, setConclusion] = useState("");
  const [introduction, setIntroduction] = useState("");

  const userId = currentUser.uid;

  const handleMainHeadingChange = (e) => {
    setMainHeading(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleConclusionChange = (e) => {
    setConclusion(e.target.value);
  };

  const handleNumTopicsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumTopics(value);
    // Reset topic headings and contents when changing the number of topics
    setTopicHeadings(Array.from({ length: value }, () => ""));
    setTopicContents(Array.from({ length: value }, () => ""));
  };

  const handleTopicHeadingChange = (index, e) => {
    const newTopicHeadings = [...topicHeadings];
    newTopicHeadings[index] = e.target.value;
    setTopicHeadings(newTopicHeadings);
  };

  const handleTopicContentChange = (index, e) => {
    const newTopicContents = [...topicContents];
    newTopicContents[index] = e.target.value;
    setTopicContents(newTopicContents);
  };

  const getFirestoreData = async () => {
    const blogsQuerySnapshot = await getDocs(collectionGroup(db, "blogs"));

    // Define an array to store user IDs
    const userIds = [];

    // Iterate over each blog document
    blogsQuerySnapshot.forEach((blogDoc) => {
      // Extract user ID from the path of each blog document
      const userId = blogDoc.ref.parent.parent.id;

      // Add the user ID to the array if it's not already present
      if (!userIds.includes(userId)) {
        userIds.push(userId);
      }
    });

    console.log("User IDs with blogs:", userIds);

    const blogsQuerySnapshot1 = await getDocs(collectionGroup(db, "blogs"));

    // Define an array to store all blogs
    const allBlogs = [];

    // Iterate over each blog document
    blogsQuerySnapshot1.forEach((blogDoc) => {
      // Extract blog data and add it to the array
      allBlogs.push({
        userId: blogDoc.ref.parent.parent.id,
        blogId: blogDoc.id,
        data: blogDoc.data(),
      });
    });

    console.log("All blogs:", allBlogs);
  };

  useEffect(() => {
    getFirestoreData();
    console.log("currentUser", currentUser);
  }, []);

  const storeFormData = async () => {
    // Create topicContents object based on the topicHeadings and topicContents arrays
    const topicContentsObject = {};
    for (let i = 0; i < numTopics; i++) {
      topicContentsObject[`topic${i + 1}`] = {
        heading: topicHeadings[i],
        content: topicContents[i],
      };
    }

    console.log(currentUser.uid);

    const currentDate = new Date();
    console.log(currentDate);

    console.log({
      mainHeading: mainHeading,
      introduction: introduction,
      conclusion: conclusion,
      category: category,
      numTopics: numTopics,
      topicList: topicContentsObject,
      createdAt: dayjs().format("D MMMM YYYY"),
      author: currentUser.displayName,
    });

    const userDocRef = doc(db, "usersBlogs", userId);
    const blogsCollectionRef = collection(userDocRef, "blogs");

    const data = {
      mainHeading: mainHeading,
      introduction: introduction,
      conclusion: conclusion,
      category: category,
      numTopics: numTopics,
      topicList: topicContentsObject,
      createdAt: dayjs().format("D MMMM YYYY"),
      author: currentUser.displayName,
    };

    const blogDocRef = await addDoc(blogsCollectionRef, data);
    console.log("Blog document added with ID: ", blogDocRef.id);
  };

  return (
    <div className="w-full px-[100px]">
      <form
        className="flex flex-col items-start justify-start w-full gap-[20px]"
        onSubmit={(e) => {
          e.preventDefault();
          storeFormData();
        }}
      >
        <div className="flex flex-wrap justify-between mb-6 w-full">
          {/* Main Heading */}
          <div className="w-full md:w-full mb-10 md:mb-0">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="mainHeading"
            >
              Title
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700  appearance-none focus:outline-none focus:shadow-outline"
              id="mainHeading"
              type="text"
              placeholder="Enter Title..."
              value={mainHeading}
              onChange={handleMainHeadingChange}
            />
          </div>

          {/* Category */}
          <div className="w-1/3 md:w-full mb-6 md:mb-0">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="category"
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="" disabled hidden>
                Select category...
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Topics */}
          <div className="w-1/3 md:w-full">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="numTopics"
            >
              Number of Topics
            </label>
            <select
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="numTopics"
              onChange={handleNumTopicsChange}
              value={numTopics}
            >
              {topics.map((num, index) => (
                <option key={index} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Introduction Textarea */}
        <div className="w-full mb-6">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="introduction"
          >
            Introduction
          </label>
          <textarea
            className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border-none appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Enter introduction..."
            value={introduction}
            onChange={handleIntroductionChange}
            rows="4"
          ></textarea>
        </div>

        {topicHeadings.map((heading, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between mb-6 w-full"
          >
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor={`topicHeading${index}`}
            >
              Topic {index + 1} Title
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 mb-5 appearance-none focus:outline-none focus:shadow-outline"
              id={`topicHeading${index}`}
              type="text"
              placeholder={`Enter topic ${index + 1} title...`}
              value={heading}
              onChange={(e) => handleTopicHeadingChange(index, e)}
            />
            <textarea
              className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border-none appearance-none focus:outline-none focus:shadow-outline"
              placeholder={`Enter topic ${index + 1} content...`}
              value={topicContents[index]}
              rows="4"
              onChange={(e) => handleTopicContentChange(index, e)}
            ></textarea>
          </div>
        ))}

        {/* Conclusion Textarea */}
        <div className="w-full mb-6">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="conclusion"
          >
            Conclusion
          </label>
          <textarea
            className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border-none appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Enter conclusion..."
            rows="4"
            value={conclusion}
            onChange={handleConclusionChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Form Data
        </button>
      </form>
    </div>
  );
};

export default AuthorForm;
