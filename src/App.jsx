import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import AllPost from "./Components/AllPost/AllPost";
import Footer from "./Components/Footer/Footer";

function NotFound() {
  return <h1>NotFound</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allpost" element={<AllPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
