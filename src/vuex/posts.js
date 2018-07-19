import appService from '../app.service';

const state = {
  posts: [],
  categoryId: 0,
};

const getters = {
  posts: state => state.posts,
};

const actions = {
  updateCategory(context, categoryId) {
    appService.getPosts(categoryId).then(posts => {
      context.commit('updateCategory', { categoryId, posts });
    });
  },
};

const mutations = {
  updateCategory(state, { categoryId, posts }) {
    state.posts = posts;
    state.categoryId = categoryId;
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
