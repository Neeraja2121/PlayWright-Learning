 import{test,expect} from '@playwright/test'


 test('API Delete',async({request})=>
{
  const response=await request.delete("https://jsonplaceholder.typicode.com/guide/")

  await expect(response.status()).toBe(404);

  const ResponseData=await response.headers();

  await expect(ResponseData['content-type']).toContain('application/json');

})