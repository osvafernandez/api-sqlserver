export const home = (req, res) => {
  res.render("home");
};

export const tableData = async (req, res) => {
  const result = await fetch("http://localhost:3500/api/instruments")
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
  res.render("tableData", { result: result });
};

export const administracion = async (req, res) => {
  res.render("admin");
};

export const login = async (req, res) => {
  res.render("login");
};

export const checkLoginCredentials = (req, res) => {
  console.log(req.body.username, req.body.password);
  res.render("login");
};
