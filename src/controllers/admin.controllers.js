export const credentials = async (req, res) => {
  try {
    res.redirect("/");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
