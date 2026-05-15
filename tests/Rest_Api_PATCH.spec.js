 import{test,expect} from '@playwright/test'
 
 
 test('Testing using Put method',async({request})=>{
 
       const response=await request.patch("https://jsonplaceholder.typicode.com/posts/1",
         {
             headers:{
                 'Content-type': 'application/json; charset=UTF-8',
             },
             data:{
                 
                 title: 'foo',
                 
             },
         }
       );
 
       expect(response.status()).toBe(200);
 
       const ResponseData=await response.json();
 
       expect(ResponseData.title).toBe('foo')
 
       const ResponseHeaders=await response.headers();
 
       expect(ResponseHeaders['content-type']).toContain('application/json');
 
 });