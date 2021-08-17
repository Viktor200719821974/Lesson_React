import {useEffect, useState} from "react";
import {Post} from "../post/Post";
import {getPosts} from "../../service/posts.service";




export  function Posts(item){

    let [posts, setPosts] = useState( []);
    let [post, setPost] = useState([null])


    useEffect(() =>{
        getPosts().then(value => setPosts([...value]));
    },[]);


    const choosePost = (id) =>{
       let choosenPost = posts.find(value => value.id == id);
       setPost(choosenPost);
    }
    return (
        <div className={'posts'}>
            <div className={'post'}>
                {
                    posts.map(value => <Post item={value} key={value.id} choosePost={choosePost}/>)
                }
            </div>

                {
                   post && <div className={'post_button'}>{post.body}</div>
                }

        </div>
    );
}

