import http from "http";

// product array
const products = [];
let productId = 1;

// GET => DATA KO GET KARTA HAI
// POST => DATA KO SEND KARTA HAI
// PUT => DATA KO UPDATE KARTA HAI
// DELET => DATA KO DELETE KARTA HAI

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "POST") {
    let body = "";
    req.on("data", (chuck) => {
      body += chuck;
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      const product = { id: productId++, ...data };
      products.push(product);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product Added Successfully",
          product: product,
          success: true,
        })
      );
    });
  } else if (url === "/products" && method === "GET") {
    res.writeHead(201, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Fetched All Products",
        products: products,
        success: true,
      })
    );
  } else if (url.startsWith("/products/") && method === "PUT") {
    const id = parseInt(url.split("/")[2], 10);
    let body = "";
    req.on("data", (chuck) => {
      body += chuck;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products[index] = { id, ...data };

        res.writeHead(201, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Product Updated Successfully",
            products: products[index],
            success: true,
          })
        );
      } else {
        res.writeHead(201, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Product not found",
          })
        );
      }
    });
  } else if (url.startsWith("/products/") && method === "DELETE") {
    const id = parseInt(url.split("/")[2], 10);
    const index = products.findIndex((p) => p.id === id);
    if(index !== -1){
        const deleteProduct = products.splice(index,1)
          res.writeHead(201, { "content-type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Product Deleted Successfully",
              products: deleteProduct[0],
              success: true,
            })
          );
    }else{
        res.writeHead(201, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Product not found",
          })
        );
    }
  }
});

const port = 3000;
server.listen(port, () => console.log(`server is running on port ${port}`));
