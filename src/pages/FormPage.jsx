import {useState} from "react";
const FormPage =()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body };
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }


        return (
            <div>
                <h2>FormPage</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={handleTitleChange} />
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label>
                        <textarea value={body} onChange={handleBodyChange} />
                    </div>
                    <div>
                        <button type="submit">Create Post</button>
                    </div>
                </form>
                <div>
                    <h2>Posts:</h2>
                    {posts.map((post, index) => (
                        <div key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

export default FormPage