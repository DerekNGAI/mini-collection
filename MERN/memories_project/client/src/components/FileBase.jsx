import React, { useRef } from "react";

const FileBase = ({ type = "file", multiple = false, onDone }) => {
  const inputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Converts to Base64 data URL (e.g., "data:image/png;base64,...")
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    });

    Promise.all(promises)
      .then((base64Files) => {
        if (!multiple) {
          onDone(base64Files[0]); // Single file: pass the first (and only) Base64 string
        } else {
          onDone(base64Files); // Multiple: pass array of Base64 strings
        }
      })
      .catch((error) => {
        console.error("Error converting files to Base64:", error);
        // Optionally call onDone with an empty value or handle the error
      });
  };

  return (
    <input
      ref={inputRef}
      type={type}
      multiple={multiple}
      onChange={handleFileSelect}
      // style={{ display: "none" }} // Hidden by default; trigger via ref if needed
    />
  );
};

export default FileBase;
