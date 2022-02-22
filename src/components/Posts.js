import React, { Component} from 'react';

export default class Post extends Component {
    state = {
        posts: []
    }

    async componentDidMount () {
        const postsFetch = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postsJson = await postsFetch.json();
        this.setState({
            posts: postsJson
        });
    }

    render () {
        return <div>
            {
                this.state.posts.map(post => {
                    return <div key={post.id}>
                        <h4>{ post.title }</h4>
                        <p>{ post.title }</p>
                    </div>
                })
            }
        </div>
    }
}