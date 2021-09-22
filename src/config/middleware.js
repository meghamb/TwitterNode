/* used in ejs file with res received, where there will be flash messages in response */
const setFlash = function (req, res, next) {
  res.locals.flash = {
    success: req.flash('success'),
    error: req.flash('error'),
    info: req.flash('info'),
  };
  next();
};

module.exports = { setFlash };
