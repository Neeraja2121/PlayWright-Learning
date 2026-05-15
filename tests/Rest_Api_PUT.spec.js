import{test,expect} from '@playwright/test'


test('Testing using Put method',async({request})=>{

      const response=await request.put("https://jsonplaceholder.typicode.com/posts/1",
        {
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            data:{
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
        }
      );

      expect(response.status()).toBe(200);

      const ResponseData=await response.json();

      expect(ResponseData.title).toBe('foo')

      const ResponseHeaders=await response.headers();

      expect(ResponseHeaders['content-type']).toContain('application/json');

});