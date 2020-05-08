// === import style sass and vendor scss ======== the output will bundle.css=========
import "../scss/vendor/vendor.scss";
import "../scss/main/main.scss";
// ============ END =========================

// === import style js and vendor js file ======== the output will bundle.js=========
import "./vendor"
import "./main/main";
// ============ END =========================

//== import image files to move from src/img to dist/img to use in index.html 
//(if image files are used in .scss files as background url() then no need to import here the scss loaders in webpack.config.js file will do the job)
import '../img/1.jpg';
import '../img/favicon-16x16.png';
import '../img/rai-sagar-888.png';
import '../img/rai-sagar-592.png';
import '../img/raisagarportfolio.png';
//=======================================================================================================================================



