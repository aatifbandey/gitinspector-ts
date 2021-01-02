const request = require('request');

const Redis = require("ioredis");

const client = new Redis({
  port: 6379, // Redis port
  	host: "127.0.0.1", // Redis host
});

client.on('error', (err:string) => {
  console.log("Error " + err)
});

export const getApiResponse = async (ctx:any) => {
	
  const search = ctx.request.body.search || '';
  const type = ctx.request.body.type || 'user';
  const redisKey = `${type}:${search}`;
  let source = 'cache';

  // Try fetching the result from Redis first in case we have it cached
  	const apiData = await client.get(redisKey, (err:string, data:any) => {
 
    // If that key exists in Redis store
    if (data) {
						
      return {
        data: JSON.parse(data),
      }
 
    } else {
      source = 'api'
    }
  });
	
  if (source === 'api') {

    let url;
    if(type === "user") {
      url = `https://api.github.com/search/users?q=${search}`;

    } else if (type === "repo") {
      url = `https://api.github.com/search/repositories?q=${search}`
    }

    const options = {
      url,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
      },
      json: true,
    };
    
    return new Promise(function(resolve) {
      request(options, function(error:string, response:any, body:object) {
        client.setex(redisKey, 360, JSON.stringify(body))
        resolve({
          data: body,
          source: source
        });
      });
    });
  } 
  return {
    data: JSON.parse(apiData),
    source
  };
}

export const deleteCache =  async () => {
  await client.flushdb( function (err:string, succeeded:boolean) {
    console.log(succeeded); // will be true if successfull
    if(err) {
      return {
        message: "Something went wrong"
      }
    } else {
      return {
        message: "Deleted all cache"
      }
    }
    
  });
}