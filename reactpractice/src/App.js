import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Switch, useHistory } from "react-router-dom";
import { format } from "date-fns";
import { Homepage } from "./home";
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  // const [history] = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const filteredResults =
      posts.filter((post) =>
        post.body.toLowerCase().includes(search.toLowerCase())
      ) || post.title.toLowerCase().includes(search.toLowerCase());

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMM dd, yyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
  };
}

const handleDelete = async (id) => {
  try {
    await api.delete(`/posts/${id}`);
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    history.push("/");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  return (
    <div className="App">
      <Header title="React practice blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
    </div>
  );
};
export default App;
