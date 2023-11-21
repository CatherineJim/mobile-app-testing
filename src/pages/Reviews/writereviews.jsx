import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export const WriteReviews = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ["image/*", "application/pdf"],
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const removeFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </div>

      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {file.name} - {file.size} bytes
            <button onClick={() => removeFile(file)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Your comment input field can go here */}
      <textarea placeholder="Add your comment here"></textarea>

      {/* Submit button can go here */}
      <button onClick={() => handleSubmit(files)}>Submit Comment</button>
    </div>
  );
};

function handleSubmit(files) {
  // Handle the comment submission and file uploads here
  console.log("Comment submitted with files:", files);
}

export default WriteReviews;
