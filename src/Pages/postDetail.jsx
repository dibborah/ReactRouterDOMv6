import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";
const PostDetail = () => {// Not writting the components name in uppercase also throws errors
    const [post, setPost] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`${url}/${id}`)
            const data = await response.json();
            console.log(data);
            setPost(data);
        }
        fetchPost();
    }, []);
    return (
        <div>
            {post && (
                <>
                    <h2>
                        Title : {post.title}
                    </h2>
                    <p>
                        Body : {post.body}
                    </p>
                </>
            )}
        </div>
    )
}

export default PostDetail;