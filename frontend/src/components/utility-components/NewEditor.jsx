// import { Editor } from "@tinymce/tinymce-react";

// export default function Rich() {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   return (
//     <>
//       <Editor
//         apiKey="your-api-key"
//         onInit={(evt, editor) => (editorRef.current = editor)}
//         initialValue="<p>This is the initial content of the editor.</p>"
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             "advlist",
//             "autolink",
//             "lists",
//             "link",
//             "image",
//             "charmap",
//             "preview",
//             "anchor",
//             "searchreplace",
//             "visualblocks",
//             "code",
//             "fullscreen",
//             "insertdatetime",
//             "media",
//             "table",
//             "code",
//             "help",
//             "wordcount",
//           ],
//           toolbar:
//             "undo redo | blocks | " +
//             "bold italic forecolor | alignleft aligncenter " +
//             "alignright alignjustify | bullist numlist outdent indent | " +
//             "removeformat | help",
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//       />
//       {/* <button onClick={log}>Log editor content</button> */}
//     </>
//   );
// }
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
export const QuillToolbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="toolbar"
      className="flex flex-col md:flex-row justify-between w-full rounded relative"
    >
      <div className="md:flex items-center">
        <select className="ql-font m-0" defaultValue="arial">
          <option value="arial">Arial</option>
          <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option>
        </select>
        <select className="ql-header ml-2" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
      </div>
      <div className="md:flex items-center mt-2 md:mt-0">
        <button className="ql-bold mr-2" />
        <button className="ql-italic mr-2" />
        <button className="ql-underline mr-2" />
      </div>
      <div className="md:flex items-center mt-2 md:mt-0">
        <button className="ql-list mr-2" value="ordered" />
        <button className="ql-list mr-2" value="bullet" />
      </div>
      <div className="md:hidden mt-2">
        <button onClick={() => setOpen(!open)}>
          <BsThreeDotsVertical />
        </button>
        {open && (
          <div className="list-menu absolute right-0 top-10 p-2 w-full bg-slate-400">
            <span className="ql-formats">
              <select className="Aalign ql-align" />
              <select className="Acolor ql-color" />
              <select className="Abackground ql-background" />
            </span>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center mt-2">
        <select className="Aalign ql-align mr-2" />
        <select className="Acolor ql-color mr-2" />
        <select className="Abackground ql-background mr-2" />
      </div>
    </div>
  );
};
export default QuillToolbar;
