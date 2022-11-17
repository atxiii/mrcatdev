import Glide from '@glidejs/glide'

const glide = new Glide('.glide',{
    startAt: 1,
    perView: 1,
    peek: {
      before: 60,
      after: 40
    }
});
glide.mount();
