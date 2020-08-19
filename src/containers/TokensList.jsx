import React, { useState } from "react";
import ReactFileUploadMobile from "react-file-upload-mobile";

const XMLUpload = (props) => {
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState();
  const clearAttachment = () => {
    setImage("");
    setImageName("");
  };
  const onUpload = (file) => {
    // upload api
  };
  const preview = () => {
    // preview picture
  };

  return (
    <ReactFileUploadMobile
      fileUrl={image}
      fileName={imageName}
      displayOnly={false}
      preview={preview}
      compressImg={0.8}
      onFileDelete={clearAttachment}
      onFileUpload={onUpload}
      showNote={true}
      uploadSuffix={["docx", "doc", "jpg", "png", "jpeg", "zip"]}
      uploadImgSuffix={["jpg", "png", "jpeg"]}
    />
  );
};

export default XMLUpload;
