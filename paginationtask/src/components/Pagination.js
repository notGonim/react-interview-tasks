import React from 'react'
import styled from "styled-components";


export const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNums = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNums.push(i)
    }

    return (
        <PageNumContainer>
            {pageNums.map(num => (
                <PageNum key={num} > <a onClick={() => paginate(num)} href="#" >{num}</a></PageNum>
            ))
            }
        </PageNumContainer>
    )
}


const PageNumContainer = styled.ul`
display :flex;
list-style:none;
padding:5px;
margin:10px;
margin-left:15px;
margin-right:15px;
border-radius:5px;

`

const PageNum = styled.li`
    padding :10px;
    border :1px solid #99a1a4;
    a{
    font-weight:bold;
    text-decoration:none;
}
    
`