// import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Input from "../components/utility-components/Input";
import { useRef } from "react";
import Label from "../components/utility-components/Label";
import Textarea from "../components/utility-components/Textarea";
import RichTextEditor from "../components/utility-components/Editor";
import Rich from "../components/utility-components/NewEditor";

const GenerateNewResume = () => {
  const [selectedCreativity, setSelectedCreativity] = useState("Good");
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const nameRef = useRef("");
  console.log("The name is: ", name);
  const creativityArray = ["Good", "Economic", "Average", "Premium"];
  const toneArray = [
    "Professional",
    "Funny",
    "Casual",
    "Excited",
    "Witty",
    "Sarcastic",
    "Feminine",
    "Masculine",
    "Bold",
    "Dramatic",
    "Grumpy",
    "Generate",
    "Secretive",
  ];
  function pageSubmit(e) {
    e.preventDefault();
    console.log("the name is: ", nameRef.current?.value);
    nameRef.current.value = "";
  }
  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div className="flex gap-1 items-center text-black">
          <Link to={`/dashboard`}>
            <IoIosArrowBack />
          </Link>
          <Link to={`/dashboard`}>
            <p className="text-sm font-inter text-black">Back to dashboard</p>
          </Link>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Resume generator
        </h1>
        <p className="text-sm text-gray-300 font-inter py-2">
          Provide us with a snapshot of your key details, and our AI will craft
          a tailored resume just for you.
        </p>
      </div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex md:flex-col ">
        <div className="left w-[50%] md:w-full">
          <form
            className="flex flex-col w-[65%] xl:w-[80%] lg:w-[90%] sm:w-full"
            onSubmit={pageSubmit}
          >
            <Label>Name</Label>
            <Input type={"text"} placeholder="Name" ref={nameRef} />
            <Label>Short Description</Label>
            <Input type="text" placeholder="Short Description" />
            <Label>Education details</Label>
            <Textarea placeholder="Education Details" />
            <Label>Work Experience</Label>
            <Textarea placeholder="Work Experience" />
            <Label>Achievements</Label>
            <Textarea placeholder="Achievements" />
            <Label>Job Description</Label>
            <Textarea placeholder="Job description" />
            <div className="flex justify-between m480:flex-col">
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Max Length</Label>

                <input
                  placeholder="Max word length"
                  type="number"
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                  defaultValue={400}
                  max={400}
                  min={100}
                  step={1}
                />
              </div>
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Number of results</Label>
                <input
                  type="number"
                  placeholder="Number of results"
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                  defaultValue={1}
                  step={1}
                  max={3}
                  min={1}
                />
              </div>
            </div>
            <div className="flex justify-between m480:flex-col">
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Creativity</Label>
                <select
                  onChange={(e) => setSelectedCreativity(e.target.value)}
                  defaultValue={"Good"}
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                >
                  {creativityArray.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Tone of voice</Label>
                <select
                  onChange={(e) => setSelectedTone(e.target.value)}
                  defaultValue={"Professional"}
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                >
                  {toneArray.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <input
              value={"Generate"}
              type="submit"
              className="input font-inter px-3 py-[10px] my-4 bg-[#3F292B] text-oliv outline-none border rounded-3xl cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue"
            />
          </form>
        </div>
        <div className="right w-[50%] md:w-full">
          <RichTextEditor />
          {/* <QuillToolbar /> */}
        </div>
      </div>
    </div>
  );
};

export default GenerateNewResume;
