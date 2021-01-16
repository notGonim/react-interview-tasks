import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Pagination } from '../components/Pagination'

import { Posts } from '../components/Posts'

export const Home = () => {
    // free api that return arr of obj => {userId ,id,title ,body }
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currPage, setCurrPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    const fetchPosts = async () => {
        setLoading(true)
        const res = await fetch(apiUrl)
        const data = await res.json()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
        // console.log(posts[0].title)
    }, [])

    //get curr posts
    const indexOfLastPost = currPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //change page
    const paginate = pageNum => setCurrPage(pageNum)




    return (
        <PostContainer>
            <h1>Posts : </h1>
            <Posts posts={currPosts} loading={loading} />
            <Pagination paginate={paginate} postPerPage={postsPerPage} totalPosts={posts.length} />
        </PostContainer>
    )
}


const PostContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    margin:10px;
    h1{
        color: #124655;
    }
`
