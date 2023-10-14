import { useEffect, useState} from "react";
import axios from "axios";

const MainPage =()=>{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const getPost = async ()=>{
            const response = await axios.get('https://dummyjson.com/posts')
            setPosts(response.data.posts)
        }
        getPost()

    },[])

    return(
        <div className='cards'>
            <h1>Main Page with Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h4>{post.id}</h4>
                    <p>{post.title}</p>
                    <i>{post.body}</i>
                </div>
            ))}
        </div>
    )
}

export default MainPage