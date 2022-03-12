import Post from './Post'
import React from "react";
import Products from './Products';
import Users from './Users';
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>
          This is App component
        </h1>
        <Post></Post>
        <Products/>
        <Users/>
      </div>
    )
  }
}
export default App;