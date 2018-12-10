import React, {Component} from 'react';


function Listitem(props) {
    return <li>{props.name}</li>

}

function NumberLists(props){
    const  numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <Listitem key={number.toString()} value={number}/>
    );
    return(
        <ul>{listItems}</ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            <hr/>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}



class ReactList extends Component{
render(){

    const numbers = [1, 2, 3, 4, 5];
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return(
        <div>
            <h1> List Item</h1>
            <NumberLists numbers={numbers}/>
            <Blog posts={posts}/>
        </div>
    );
}
}
export  default ReactList;