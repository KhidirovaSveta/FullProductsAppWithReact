const express = require("express");
const app = express();
const port = 8080;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

let countId = 13;

let products = [
  {
    id: 1,
    name: "Asus",
    price: 1100,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://www.asus.com/media/Odin/Websites/global/Series/9.png",
  },
  {
    id: 2,
    name: "Zenbook Flip",
    price: 1200,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://www.asus.com/media/Odin/Websites/global/Series/11.png",
  },
  {
    id: 3,
    name: "Asus VivoBook 14",
    price: 1300,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://m.media-amazon.com/images/I/61aJ66mAt2L.jpg",
  },
  {
    id: 5,
    name: "Asus",
    price: 1000,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://dlcdnwebimgs.asus.com/gain/21371848-0723-48d5-8ed9-61b9e3bd2125/",
  },
  {
    id: 6,
    name: "Asus laptop 14",
    price: 1800,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://cdn.shopify.com/s/files/1/0449/4635/8437/products/download_11_c2d57fb7-c1c4-420c-aad2-4799bd087928_1024x1024.png?v=1663745040",
  },
  {
    id: 7,
    name: "Asus Laptop M415DA",
    price: 900,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://emcor.com.ph/wp-content/uploads/2022/05/M415DA-BV940W.jpg",
  },
  {
    id: 8,
    name: "Asus",
    price: 800,
    description:
      "ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. ",
    img: "https://dlcdnwebimgs.asus.com/gain/bd4042ba-9c3d-4dd4-a1fa-810bfc924a07/",
  },
  {
    name: "hi",
    price: 1900,
    description: "hi",
    img: "https://www.dealayo.com/media/catalog/product/cache/1/thumbnail/1000x1231/9df78eab33525d08d6e5fb8d27136e95/l/e/lenovo-ideapad-3-i5-3-nepal_1.jpg",
    id: 10,
  },
  {
    name: "msi",
    price: 1500,
    description: "aaaaaaa",
    img: "https://asset.msi.com/resize/image/global/product/product_8_20180212152725_5a8141dd4d7e4.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    id: 11,
  },
  {
    name: "macbook pro",
    price: 7000,
    description: "aaaaaaa",
    img: "https://www.tradeinn.com/f/13745/137457920/apple-macbook-pro-touch-bar-16-i9-2.3-16gb-1tb-ssd-laptop.jpg",
    id: 12,
  },
];

app.get("/", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  const productsObj = {
    id: countId++,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img: req.body.img,
  };
  products.push(productsObj);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((e) => e.id != id);
  res.status(200).json({ message: "succesfully deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  const selectedUser = products.find((products) => products.id == id);
  if (selectedUser) {
    res.send(selectedUser);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});
