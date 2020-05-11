/*-------------------------------------------------------------------------------------------------------------------------------------------------------*
*       01. SASS files  (to create "bundle.scss")                                                                                                                      *
*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
        import "../scss/import.scss";


/*-------------------------------------------------------------------------------------------------------------------------------------------------------*
*      02. Javascript files (to create "bundle.scss")                                                                                                                 *
*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
        //import "bootstrap.js", "jquery.js", "popper.js" files from installed location (node_modules)
        //just import bootstrap here and webpack will automatically import "jquery" and "popper.js" for us cause webpack will know that bootstrap need those two dependencies
        import "bootstrap";
        //import main jquery file
        import "./main/main";


/*-------------------------------------------------------------------------------------------------------------------------------------------------------*
*                  02. image files                                                                                                                       *
*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
        //import image files here to move from src/img to docs/img to use in index.html in <img> tags 
        //(if image files are used in .scss files as background url() then no need to import here the scss loaders in webpack.config.js file will do the job)

        //import favicon (will move from src/img to docs/img)
        import '../img/favicon-16x16.png';



