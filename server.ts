import data from "./test.json" with { type: "json" }
import hraci from "./hraci.json" with { type: "json" }


Deno.serve((req) => {
  const url = new URL(req.url)
  console.log(url.pathname)
  if (url.pathname === "/") {
    return new Response("Hello, World!")
  } else if (url.pathname === "/ahoj") {
    return new Response("AhojNazdar!")
  } else if (url.pathname === "/data") {
    return Response.json(data)
  } else if (url.pathname === "/hraci") {
    return Response.json(hraci, {
  headers: {
    "Access-Control-Allow-Origin": "*"
    }
  })
  } else {
    return new Response("Page not found", { status: 404 })
  }
}) 