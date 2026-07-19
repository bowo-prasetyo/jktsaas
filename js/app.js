import router from "./router.js";


const {
createApp
}
=
Vue;


const App={


template:`

<div>

<header>

<h1>
Jakarta SaaS
</h1>


<nav>

<router-link to="/">
Home
</router-link>


<router-link to="/product">
Produk
</router-link>


<router-link to="/company">
Perusahaan
</router-link>


<router-link to="/contact">
Kontak
</router-link>


</nav>


</header>



<main>

<router-view />

</main>



<footer>

© 2026 Jakarta SaaS

</footer>


</div>

`

};


createApp(App)
.use(router)
.mount("#app");
