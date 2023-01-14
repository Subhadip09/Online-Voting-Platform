const app = require("./app");
const passport = require("passport");

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});