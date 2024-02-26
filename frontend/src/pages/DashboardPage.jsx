import { useState, useEffect } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const DashboardPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user information from the API
        const response = await fetch(
          `http://localhost:8000/api/v1/user/verify/${localStorage.getItem(
            "jwt"
          )}`
        );
        const { user: userData } = await response.json();
        setUser(userData);

        // Calculate token percentage and set loading progress
        // const tokenPercentage =
        //   (Number(userData?.remainingTokens) / Number(userData?.totalTokens)) *
        //   100;
        // const interval = setInterval(() => {
        //   setLoadingProgress((prevProgress) =>
        //     prevProgress >= tokenPercentage ? tokenPercentage : prevProgress + 3
        //   );
        // }, 100); // Adjust the interval based on your desired animation speed
        // Simulate loading animation
        const interval = setInterval(() => {
          setLoadingProgress((prevProgress) =>
            prevProgress >= 85 ? 85 : prevProgress + 3
          );
        }, 100); // Adjust the interval based on your desired animation speed

        // Clear the interval on component unmount or when the effect is re-run
        return () => clearInterval(interval);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Fetch user data when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount
  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex justify-between items-center lg:flex-col lg:items-start lg:py-6">
        <div>
          <p className="text-sm font-inter text-black">User dashboard</p>
          <h1 className=" py-4 text-3xl text-black font-inter font-bold">
            Welcome, {user?.name || "User"}.
          </h1>
        </div>
        <div>
          <div className="flex gap-5 lg:-ml-[2px] s360:flex-col">
            <button className="text-base w-40 outline-none rounded-3xl py-2 px-2 shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 ">
              View documents
            </button>
            <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 sm:w-40">
              Create new
            </button>
          </div>
        </div>
      </div>
      <div className="upgrade w-full p-4 border-b-gray-200 border-b flex justify-between sm:flex-col sm:gap-0 sm:justify-center">
        <div className="left-side w-[50%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center sm:w-full flex flex-col gap-4">
          <p className="font-extrabold text-[1.6rem] font-inter">Upgrade</p>
          <h3 className="font-inter w-[100%] text-sm">
            You have no subscription at the moment. Please select a subscription
            plan or a token pack
          </h3>
          <p className="font-inter text-sm">
            Total {user?.totalTokens ? user?.totalTokens : "895"} tokens left.
          </p>
          <button className="text-base flex items-center justify-center text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none ">
            + Select Plan
          </button>
        </div>

        <div className="right-side flex justify-center mr-5 items-center pt-[22px] sm:w-full sm:flex sm:flex-col sm:justify-center">
          <div className="chakra flex justify-center items-center flex-col sm:flex-col sm:items-center sm:justify-center">
            <CircularProgress
              value={loadingProgress}
              color="#b57a6d"
              size="100px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add curved effect
              }}
            >
              <CircularProgressLabel>{`${loadingProgress}%`}</CircularProgressLabel>
            </CircularProgress>
            <p className="font-inter fontnt-ext font-extrabold pt">
              {user?.totalTokens ? user?.totalTokens : "895"} tokens are left
            </p>
          </div>
        </div>
      </div>
      <div className="overView w-[100%] py-8 px-4 border-b-gray-200 border-b flex sm:flex-col">
        <div className="left-row-right w-[100%] flex  sm:flex">
          <div className="leftover  border-r-2 w-[100%] sm:w-[100%] sm:pr-3">
            <p className="font-extrabold font-inter ">Overview</p>
            <p>words left</p>
            <p className="font-extrabold font-inter">{user?.totalTokens}</p>
          </div>

          <div className="second-left  w-[100%] pl-3 border-r-2 pr-3 sm:w-[100%] sm:pr-3">
            <p className="font-extrabold font-inter">Hours Saved</p>
            <p>4</p>
          </div>
        </div>
        <div className="rightover w-[60%] pl-3 sm:pl-0 sm:pt-3 ">
          <p className="font-extrabold font-inter">Your Documents</p>
          <div className="chakra">
            <Progress
              className="w-[90%]"
              colorScheme="customColor"
              trackcolorscheme="red"
              isAnimated={true}
              value={80}
              bg="#a45848"
              style={{ borderRadius: "10px" }}
            />

            <div className="radio-buttons pt-2">
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio
                    value="1"
                    colorScheme="transparent"
                    style={{ backgroundColor: "#a7beae" }}
                  >
                    Text 1
                  </Radio>
                  <Radio
                    value="2"
                    colorScheme="transparent"
                    style={{ backgroundColor: "#a45848" }}
                  >
                    Total 1
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="documents-box w-[90%] flex gap-12 pt-10 sm:flex sm:flex-col sm:w-[100%]">
        <div className="left-boxes box-border h-[2rem] w-full sm:w-[80%] border-2 ml-[1rem] rounded-[0.4rem]">
          <p className="font-inter font-medium">Documents</p>
        </div>
        <div className="left-boxes box-border h-[2rem] w-full sm:w-[80%] border-2 rounded-[0.4rem]sm:ml-[3rem]">
          <p className="font-inter pl-4 font-medium">Favorite Templates</p>
        </div>
      </div> */}
      <div className="copyright p-6">
        <p className="font-inter">
          Copyright © 2024 AI Profile Builder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
