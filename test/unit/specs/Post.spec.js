import Vue from 'vue';
import Post from '../../../src/theme/Post.vue';

describe('Post.vue', () => {
  let link = 'http://google.com';
  const createComponent = () => {
    const PostConstructor = Vue.extend(Post);

    const comp = new PostConstructor({
      propsData: { link },
    }).$mount();

    return comp;
  };

  it('should render the link', () => {
    const comp = createComponent();

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal(link);
  });

  it('should update element\'s href when property link changes', (done) => {
    const comp = createComponent();

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal(link);

    link = 'http://yandex.ru';

    comp.link = link;

    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal(link);
      done();
    });
  });
});
