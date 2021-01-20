<template>
  <div >
    <b-row>
      <b-col sm="2"><img src="./assets/img/logo-patria.png" width="160"></b-col>
      <b-col sm="10"><Header/></b-col>
    </b-row>
    <b-row>
      <b-col sm="2"><Sidebar/></b-col>
      <b-col sm="10"><router-view/></b-col>
    </b-row>
      <b-col sm="12"><Footer/></b-col>
  </div>
</template>

<script>
import Sidebar from './components/container/Sidebar';
import Header from './components/container/Header';
import Footer from './components/container/Footer';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Footer
  }
}
</script>