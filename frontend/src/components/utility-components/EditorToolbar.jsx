import { Quill } from "react-quill";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: false,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const QuillToolbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="toolbar" className="flex justify-between w-full rounded relative">
      <span className=" mr-0 flex justify-between">
        <select className="ql-font m-0" defaultValue="arial">
          <option value="arial">Arial</option>
          <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option>
        </select>
        {/* <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select> */}
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
      </span>
      <span className="">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        {/* <button className="ql-strike" /> */}
      </span>
      <span className="">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        {/* <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" /> */}
      </span>
      <span className="lg:hidden">
        <select className="Aalign ql-align" />
        <select className="Acolor ql-color " />
        <select className="Abackground ql-background" />
      </span>

      <span className="hidden xl:block">
        <button onClick={() => setOpen(!open)}>
          <BsThreeDotsVertical />
        </button>
        {open && (
          <div className="list-menu absolute right-0 top-10 p-2 w-full bg-slate-400 ">
            <span className="ql-formats lg:block w-full">
              <select className="Aalign ql-align" />
              <select className="Acolor ql-color" />
              <select className="Abackground ql-background" />
            </span>
          </div>
        )}
      </span>
    </div>
  );
};

export default QuillToolbar;
