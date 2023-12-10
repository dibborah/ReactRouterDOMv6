import { useState, useEffect } from "react";
import Post from "../Components/Post";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

// mount -> data fetch
// Aur Mount karne ke baad code run karne ke liye hum useEffect use karte hain

// later
// data fetch -> mount

const Posts = () => {
    const [posts, setPosts] = useState(null);
    // const controller = new AbortController();

    const fetchPosts = async () => {
        const response = await fetch(endpoint)// fetch request
        const data = await response.json();
        console.log(data);
        setPosts(data);
    }
    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div>
            {posts &&
                posts.map(post => <Post {...post} key={post.id} />)}
        </div>
    )
}

export default Posts;