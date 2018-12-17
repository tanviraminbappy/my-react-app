import React, {Component} from 'react';
import PostData from './posts.json'

class PostList extends Component {

    render() {

        return (<div>

                <h1> <bold>Read All Posts</bold></h1>
                {PostData.map((posts) => {
                    return <div>
                        <h2>{posts.title}</h2>
                        <p>{posts.content}</p>
                        <span>{posts.slug}</span>
                    </div>
                })}
            </div>
        );

    }

}

export default PostList