import Tab from 'bootstrap/js/dist/tab';

export default {
  mounted() {
    this.tab = new Tab(this.$refs.bsTab);
  },
};
