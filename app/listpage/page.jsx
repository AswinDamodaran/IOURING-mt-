"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import axios from "axios";
import Listview from "../components/listView/Listview";
import Footer from "../components/footer/Footer";
import AddSection from "../components/addsection/AddSection";
import EditModal from "../components/editModal/EditModal";
import toast from "react-hot-toast";

function ListPage() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [isAddMode, setIsAddMode] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (newPost) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      toast.success("Post added");
      setPosts((prev) => [response.data, ...prev]);
      setIsAddMode(false);
    } catch (error) {
      toast.error("Failed to add post");
    }
  };

  const handleUpdate = async (updatedPost) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        updatedPost
      );
      toast.success("Post updated");
      setPosts((prev) =>
        prev.map((p) =>
          p.id === updatedPost.id ? { ...p, ...updatedPost } : p
        )
      );
      setEditingPost(null);
    } catch (error) {
      toast.error("Failed to update post");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      toast.success("Post deleted");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      toast.error("Failed to delete post");
    }
  };

  const openAddModal = () => {
    setIsAddMode(true);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "";

    setUsername(storedUsername);
    getPosts();
  }, []);

  return (
    <div>
      <Header username={username} />
      <AddSection onAddClick={openAddModal} />
      
      <Listview
        posts={posts}
        onDelete={handleDelete}
        onUpdate={setEditingPost}
        loading={loading}
      />
      <Footer />

      <EditModal
        post={isAddMode ? null : editingPost}
        isOpen={isAddMode || !!editingPost}
        onClose={() => {
          setEditingPost(null);
          setIsAddMode(false);
        }}
        onSave={isAddMode ? handleAdd : handleUpdate}
      />
    </div>
  );
}

export default ListPage;
