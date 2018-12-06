import React, {Component} from 'react';
import PostData from './posts.json'

class PostList extends Component {

    render() {

        return (<div>

                <h1> Hello There</h1>
                {PostData.map((posts, index) => {
                    return <div>
                        <h1>{posts.title}</h1>
                        <p>{posts.content}</p>
                        <span>{posts.slug}</span>
                    </div>
                })}
            </div>
        );

    }

}

export default PostList