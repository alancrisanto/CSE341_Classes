const AlanRoute = (req, res) => {
  res.send("Hello Alan")
}
const guessRoute = (req, res) => {
  res.send("Hello World")
}

module.exports = {AlanRoute, guessRoute};
