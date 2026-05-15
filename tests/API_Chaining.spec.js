import {test, expect } from "@playwright/test";


test('Api chaining',async({request})=>{

    const postResponse=await request.get('https://jsonplaceholder.typicode.com/posts')
    expect(postResponse.status()).toBe(200);

    const posts=await postResponse.json();

    const firstPost=posts[0];

   

    const commentsResponse=await request.get(`https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`)

    console.log(firstPost)
    console.log(firstPost.id)

    expect(commentsResponse.status()).toBe(200)

    const comments =await commentsResponse.json();

    expect(comments[0].postId).toBe(firstPost.id);

})

 