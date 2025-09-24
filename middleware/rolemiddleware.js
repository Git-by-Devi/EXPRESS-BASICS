module.exports = function (allowedRoles) {
  return (req, res, next) => {
    const userRole = req.header("role"); 
    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }
    req.user = { role: userRole };
    next();
  };
};
