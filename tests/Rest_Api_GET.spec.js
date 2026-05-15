  import{test,expect} from "@playwright/test"
import { request } from "node:http"
    
  test('Get API',async({request})=>{

    const url="https://jsonplaceholder.typicode.com/posts/1"

    const response =await request.get(url)

    expect(response.status()).toBe(200)

    const ResponseBody=await response.json();

    expect(ResponseBody.userId).toBe(1)

   expect(ResponseBody.title).toBe("sunt auttt facere repellat provident occaecati excepturi optio reprehenderit")

  });

 
