const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

const role = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return res.status(403).json({ message: "Access denied" });
  next();
};

module.exports = { auth, role };
