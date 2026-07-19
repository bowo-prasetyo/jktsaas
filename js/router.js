const {
    createRouter,
    createWebHashHistory
}
=
VueRouter;


import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import Company from "./pages/Company.js";
import Contact from "./pages/Contact.js";


export default createRouter({

history:
createWebHashHistory(),


routes:[

{
path:"/",
component:Home
},

{
path:"/product",
component:Product
},

{
path:"/company",
component:Company
},

{
path:"/contact",
component:Contact
}

]

});
