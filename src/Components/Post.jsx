import { Link } from "react-router-dom";

const Post = ({ title, id }) => {
    return (
        <div style={{ padding: "1rem", margin: "1rem", border: "2px solid #232323" }}>
            {/* <Link to={`/posts/${id}`}>Absolute pathVIP : "/" slash posts is very important to write donot just write posts than it won't work fine */}
            <Link to={id.toString()}>{/*Relative Path*/ }
                <h2>{title}</h2>
            </Link>
            <p>id:{id}</p>
        </div>
    )
};

export default Post;