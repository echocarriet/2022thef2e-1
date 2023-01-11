import Collapse from 'bootstrap/js/dist/collapse';

export default {
  methods: {
    toggleCollapse() {
      this.collapse.toggle();
    },
    hideCollapse() {
      this.collapse.hide();
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.bsCollapse, {
      toggle: false,
    });
  },
};
