/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
    const locals = {
      title: "Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
  
  
  /**
   * GET /
   * About 
  */
  exports.about = async (req, res) => {
    const locals = {
      title: "About - Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('about', locals);
  }