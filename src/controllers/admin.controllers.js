export const credentials = async (req, res) => {
  try {
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
