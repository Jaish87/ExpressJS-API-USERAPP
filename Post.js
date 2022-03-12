import React from "react";
import axios from 'axios';
class Post extends React.Component{

    componentDidMount(){
        console.log("componentDidMount called");

        axios.get("http://localhost:8788/users").then(
            response => {
                console.log(response.data);
            },
            error => {
                console.log(error);
            }
        )

    }
    render(){
        return(
            <div>
                <h1>Post</h1>
            </div>
        )
        
    }
}

export default Post;