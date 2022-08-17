function get(req, res, next) {
  res.status(200).json({ name: "anas" });
}

module.exports = {
  get,
};