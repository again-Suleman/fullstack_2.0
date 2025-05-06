
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({error: "Wrong parameters"});
    }
    console.log(email, password)
    res.status(200).json({message: "Recieved"})
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

const register = async (req, res) => {};

module.exports = {
  login,
  register,
};
