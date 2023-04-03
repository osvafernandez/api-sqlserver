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
