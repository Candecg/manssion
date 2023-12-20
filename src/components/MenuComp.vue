<template>
    <div class="m1">
        <b-navbar class="menu1" toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand class="titol" to="/">MANSSION_MUSIC.mp4</b-navbar-brand>
        <b-navbar-toggle class="menu2" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                
            
                <b-nav-item to="/Emergentes">Emergentes</b-nav-item>
                <b-nav-item to="/Noticias y eventos">Noticias y eventos</b-nav-item>
                <b-nav-item to="/Contacto">Contacto</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
}
</script>

<style>

/*.router-link-exact-active, .router-link-active {

};*/

.m1 .navbar {
    top: 0;
    width: 100%;
    left: 0;
    position: fixed;
    z-index: 99;
}

.headerbar {
margin-top: -28px;
}

.menu1 {
    background-color: #000000!important;
    padding-left: 12%;
    padding-right: 3%;
};

.navbar {
background-color: #000000!important;
};

.lg {
    align-content: right;
};

.bg-primary {

    background-color: #232455!important;
};

.navbar-expand-lg .navbar-collapse {
    display: flex!important;
    /* flex-basis: auto; */

    align-items: center;
    justify-content: flex-end!important;
}

</style>