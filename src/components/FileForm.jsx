import React, { useContext } from "react";
import { AppContext } from "../pages/AddLocation";
import { createRoot } from "react-dom";

function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("post[title]", event.target.title.value);
    data.append("post[image]", event.target.image.files[0]);
    data.append("post[description]", event.target.description.value);
    data.append("post[price]", event.target.price.value);

    submitToAPI(data);
  }


  function submitToAPI(data) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>FileForm</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <br />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        <button type="submit">Create Post</button>
      </form>
      
    </div>
    
  );
}

export default FileForm;
