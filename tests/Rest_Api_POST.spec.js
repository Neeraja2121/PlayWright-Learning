 import{test,expect} from '@playwright/test'

 test('API Using Post Method',async({request})=>{
    
  const response=await request.post('https://jsonplaceholder.typicode.com/posts',
    {
   Headers:{
    'Content-type': 'application/json; charset=UTF-8',

  },

  data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    }
    );

    expect(response.status()).toBe(201);

  const responseBody = await response.json();

  console.log(responseBody);
 });