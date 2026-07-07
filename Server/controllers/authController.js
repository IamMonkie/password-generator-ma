//Login
const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    // Duo authentication logic here

    req.session.user = { userName };

    return res.status(200).json({
      success: true,
      userName,
      message: "Login successful",
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};

//Logout
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to logout",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  });
};

//Current User
const getCurrentUser = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      success: false,
      message: "No user is currently logged in",
    });
  }

  return res.status(200).json({
    success: true,
    userName: req.session.user.userName,
  });
};

module.exports = {
  login,
  logout,
  getCurrentUser,
};
