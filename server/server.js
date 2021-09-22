import app from "./app.js";
// import routes from "./routes/routes.js";

// app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server started at port", process.env.PORT);
});
