const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const productos = [
  {
    title: "Vans Yellow",
    price: 150,
    thumbnail:
      "https://images.vans.com/is/image/Vans/WKTCA1-HERO?$583x583$",
    id: 1,
  },
  {
    title: "Vans Blue SK8",
    price: 130,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_745177-MLM32037822918_092019-O.jpg",
    id: 2,
  },
  {
    title: "Nikes Bota Alta",
    price: 140,
    thumbnail:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c01c614-8078-4303-ad55-de5ac66d78ae/lebron-witness-5-basketball-shoes-XJrPgC.png",
    id: 3,
  }
];

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine(
  "hbs",
  handlebars.engine({
    layoutDirs: __dirname + "/handlebars/layouts",
    extname: "hbs",
  })
);

app.set("views", __dirname + "/handlebars");
app.set("view engine", "hbs");

//Rutas

app.get("/productos", (req, res) => {
  res.render("main", { layout: "inicio", data: productos });
});

app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  productos.push(obj);
  res.redirect("/productos");
});

app.get("/formulario", (req, res) => {
  res.render("form", { layout: "inicio" });
});

//PUG
/*
const express = require("express");
const app = express();
app.set("views", __dirname + "/pug");
app.set("view engine", "pug");

const productos = [
  {
    title: "Vans Yellow",
    price: 150,
    thumbnail:
      "https://images.vans.com/is/image/Vans/WKTCA1-HERO?$583x583$",
    id: 1,
  },
  {
    title: "Vans Blue SK8",
    price: 130,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_745177-MLM32037822918_092019-O.jpg",
    id: 2,
  },
  {
    title: "Nikes Bota Alta",
    price: 140,
    thumbnail:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c01c614-8078-4303-ad55-de5ac66d78ae/lebron-witness-5-basketball-shoes-XJrPgC.png",
    id: 3,
  }
];
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Rutas
app.get("/productos", (req, res) => {
  res.render("index", { data: productos });
});
app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  productos.push(obj);
  res.redirect("/productos");
});
app.get("/formulario", (req, res) => {
  res.render("formulario", { layout: "home", data: productos });
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
}); */


//ejs
/*
const express = require("express");
const app = express();
app.set("views", __dirname + "/ejs");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const productos = [
  {
    title: "Vans Yellow",
    price: 150,
    thumbnail:
      "https://images.vans.com/is/image/Vans/WKTCA1-HERO?$583x583$",
    id: 1,
  },
  {
    title: "Vans Blue SK8",
    price: 130,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_745177-MLM32037822918_092019-O.jpg",
    id: 2,
  },
  {
    title: "Nikes Bota Alta",
    price: 140,
    thumbnail:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c01c614-8078-4303-ad55-de5ac66d78ae/lebron-witness-5-basketball-shoes-XJrPgC.png",
    id: 3,
  }
];
//Rutas
app.get("/productos", (req, res) => {
  res.render("index", { data: productos });
});
app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  productos.push(obj);
  res.redirect("/productos");
});
app.get("/formulario", (req, res) => {
  res.render("formulario", { layout: "home", data: productos });
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
*/

