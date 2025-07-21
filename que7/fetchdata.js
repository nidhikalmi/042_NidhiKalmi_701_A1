const fetch = require('node-fetch'); 

async function fetchdata() 
{
  try {
    const res = await fetch('https://google.com'); 
    const html = await res.text(); 
    console.log(html); 
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchdata();
