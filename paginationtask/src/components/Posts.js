import React from 'react'
import styled from 'styled-components'
export const Posts = ({ posts, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <ListGroup>
                {posts.map(post => (
                    <ListItem key={post.id} >
                        {post.title}
                    </ListItem>
                ))}
            </ListGroup>

        </>
    )
}

const ListGroup = styled.ul`
  list-style:none;    

`
const ListItem = styled.li`
    padding:10px;
    border:1px solid #b2b7b8;
`