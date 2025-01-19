let styleMode = localStorage.getItem('styleMode')
const styleToggle = document.querySelector('.header__btn-theme-img')


const enableDarkStyle = () => {
  document.body.classList.add('darkstyle')
  localStorage.setItem('styleMode', 'dark')
}

const disableDarkStyle = () => {
  document.body.classList.remove('darkstyle')
  localStorage.setItem('styleMode', null)
}

const enableBackgroundDarkStyle = () => {
  let bg = document.getElementById('bg')
  let staffBackground = document.getElementById('staff-bg')
  if (bg) {
    bg.setAttribute('href', './images/sprite.svg#bg-dark');
  }
  if (staffBackground) {
    staffBackground.setAttribute('href', './images/sprite.svg#staff-bg-dark');
  }
}

const disableBackgroundDarkStyle = () => {
  let bg = document.getElementById('bg')
  let staffBackground = document.getElementById('staff-bg')
  if (bg) {
    bg.setAttribute('href', './images/sprite.svg#bg');
  }
  if (staffBackground) {
    staffBackground.setAttribute('href', './images/sprite.svg#staff-bg');
  }
}

styleToggle.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode')
  if(styleMode !== 'dark'){
    enableDarkStyle()
    enableBackgroundDarkStyle()
  }
  else {
    disableDarkStyle()
    disableBackgroundDarkStyle()
    localStorage.setItem('styleMode', null)
  }
})


const contactsFormPhone = document.querySelector('.footer__registration-input')

IMask(
  contactsFormPhone,
  {mask: '+0 (000) 000 00 00'}
)


$('.header__burger-block').on('click', function (){
  $('.header__items').slideToggle();
})

$(window).resize(function(){
  if ($(window).width() > 992){
    $(".header__items").removeAttr("style")
  }
});


const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  slidesPerView: 3,
  slidesPerGroup: 3,

  breakpoints: {

    320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      direction: 'vertical',
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        scrollbar: false,
        enabled: true,

      },
      enabled: false,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      direction: 'horizontal',
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        scrollbar: false,
        enabled: true,

      },
      enabled: true,
    },
  },
});



$(".reviews__element-rate").rateYo({
  rating: 3.5,
  readOnly: true,
  starWidth: "18px",
  numStars: 5,
});

let normalGroup = document.querySelectorAll('.jq-ry-normal-group')
normalGroup.forEach(el => {
  el.innerHTML = '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M4.85105 11.0901L3.48951 16.8956C3.44734 17.0714 3.46 17.2556 3.52582 17.4242C3.59165 17.5928 3.70757 17.738 3.85846 17.8407C4.00936 17.9434 4.1882 17.9989 4.37163 18C4.55506 18.0011 4.73456 17.9476 4.88668 17.8467L9.86225 14.5804L14.8378 17.8467C14.9935 17.9485 15.177 18.0009 15.3638 17.9968C15.5506 17.9928 15.7317 17.9325 15.8826 17.8241C16.0336 17.7158 16.1472 17.5644 16.2083 17.3906C16.2693 17.2167 16.2748 17.0286 16.224 16.8515L14.5527 11.0928L18.6976 7.41979C18.8304 7.30208 18.9252 7.14864 18.9703 6.97844C19.0155 6.80824 19.0089 6.62875 18.9516 6.46216C18.8942 6.29557 18.7885 6.14919 18.6476 6.04113C18.5066 5.93306 18.3366 5.86805 18.1585 5.85413L12.949 5.44562L10.6947 0.531792C10.6228 0.373567 10.506 0.239208 10.3583 0.144931C10.2105 0.0506541 10.0383 0.000488281 9.86225 0.000488281C9.68622 0.000488281 9.51395 0.0506541 9.36624 0.144931C9.21852 0.239208 9.10167 0.373567 9.02979 0.531792L6.77548 5.44562L1.56599 5.85323C1.39096 5.86688 1.22363 5.9299 1.08401 6.03475C0.944403 6.13959 0.838423 6.28182 0.778753 6.44442C0.719083 6.60703 0.70825 6.78311 0.747549 6.95162C0.786848 7.12013 0.874616 7.27391 1.00035 7.39459L4.85105 11.0901ZM7.45808 7.19753C7.62118 7.18488 7.77783 7.12925 7.91159 7.03648C8.04535 6.94371 8.15131 6.81721 8.21835 6.67025L9.86225 3.08813L11.5061 6.67025C11.5732 6.81721 11.6791 6.94371 11.8129 7.03648C11.9467 7.12925 12.1033 7.18488 12.2664 7.19753L15.896 7.48097L12.907 10.13C12.6475 10.3603 12.5442 10.7149 12.6392 11.046L13.7842 14.9916L10.3703 12.7502C10.2205 12.6512 10.0441 12.5983 9.86362 12.5983C9.68315 12.5983 9.50677 12.6512 9.35692 12.7502L5.7895 15.0924L6.74898 11.0019C6.78416 10.8515 6.77944 10.6946 6.73527 10.5465C6.6911 10.3984 6.60897 10.2639 6.49677 10.1561L3.72069 7.49087L7.45808 7.19753Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M4.85105 11.0901L3.48951 16.8956C3.44734 17.0714 3.46 17.2556 3.52582 17.4242C3.59165 17.5928 3.70757 17.738 3.85846 17.8407C4.00936 17.9434 4.1882 17.9989 4.37163 18C4.55506 18.0011 4.73456 17.9476 4.88668 17.8467L9.86225 14.5804L14.8378 17.8467C14.9935 17.9485 15.177 18.0009 15.3638 17.9968C15.5506 17.9928 15.7317 17.9325 15.8826 17.8241C16.0336 17.7158 16.1472 17.5644 16.2083 17.3906C16.2693 17.2167 16.2748 17.0286 16.224 16.8515L14.5527 11.0928L18.6976 7.41979C18.8304 7.30208 18.9252 7.14864 18.9703 6.97844C19.0155 6.80824 19.0089 6.62875 18.9516 6.46216C18.8942 6.29557 18.7885 6.14919 18.6476 6.04113C18.5066 5.93306 18.3366 5.86805 18.1585 5.85413L12.949 5.44562L10.6947 0.531792C10.6228 0.373567 10.506 0.239208 10.3583 0.144931C10.2105 0.0506541 10.0383 0.000488281 9.86225 0.000488281C9.68622 0.000488281 9.51395 0.0506541 9.36624 0.144931C9.21852 0.239208 9.10167 0.373567 9.02979 0.531792L6.77548 5.44562L1.56599 5.85323C1.39096 5.86688 1.22363 5.9299 1.08401 6.03475C0.944403 6.13959 0.838423 6.28182 0.778753 6.44442C0.719083 6.60703 0.70825 6.78311 0.747549 6.95162C0.786848 7.12013 0.874616 7.27391 1.00035 7.39459L4.85105 11.0901ZM7.45808 7.19753C7.62118 7.18488 7.77783 7.12925 7.91159 7.03648C8.04535 6.94371 8.15131 6.81721 8.21835 6.67025L9.86225 3.08813L11.5061 6.67025C11.5732 6.81721 11.6791 6.94371 11.8129 7.03648C11.9467 7.12925 12.1033 7.18488 12.2664 7.19753L15.896 7.48097L12.907 10.13C12.6475 10.3603 12.5442 10.7149 12.6392 11.046L13.7842 14.9916L10.3703 12.7502C10.2205 12.6512 10.0441 12.5983 9.86362 12.5983C9.68315 12.5983 9.50677 12.6512 9.35692 12.7502L5.7895 15.0924L6.74898 11.0019C6.78416 10.8515 6.77944 10.6946 6.73527 10.5465C6.6911 10.3984 6.60897 10.2639 6.49677 10.1561L3.72069 7.49087L7.45808 7.19753Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M4.85105 11.0901L3.48951 16.8956C3.44734 17.0714 3.46 17.2556 3.52582 17.4242C3.59165 17.5928 3.70757 17.738 3.85846 17.8407C4.00936 17.9434 4.1882 17.9989 4.37163 18C4.55506 18.0011 4.73456 17.9476 4.88668 17.8467L9.86225 14.5804L14.8378 17.8467C14.9935 17.9485 15.177 18.0009 15.3638 17.9968C15.5506 17.9928 15.7317 17.9325 15.8826 17.8241C16.0336 17.7158 16.1472 17.5644 16.2083 17.3906C16.2693 17.2167 16.2748 17.0286 16.224 16.8515L14.5527 11.0928L18.6976 7.41979C18.8304 7.30208 18.9252 7.14864 18.9703 6.97844C19.0155 6.80824 19.0089 6.62875 18.9516 6.46216C18.8942 6.29557 18.7885 6.14919 18.6476 6.04113C18.5066 5.93306 18.3366 5.86805 18.1585 5.85413L12.949 5.44562L10.6947 0.531792C10.6228 0.373567 10.506 0.239208 10.3583 0.144931C10.2105 0.0506541 10.0383 0.000488281 9.86225 0.000488281C9.68622 0.000488281 9.51395 0.0506541 9.36624 0.144931C9.21852 0.239208 9.10167 0.373567 9.02979 0.531792L6.77548 5.44562L1.56599 5.85323C1.39096 5.86688 1.22363 5.9299 1.08401 6.03475C0.944403 6.13959 0.838423 6.28182 0.778753 6.44442C0.719083 6.60703 0.70825 6.78311 0.747549 6.95162C0.786848 7.12013 0.874616 7.27391 1.00035 7.39459L4.85105 11.0901ZM7.45808 7.19753C7.62118 7.18488 7.77783 7.12925 7.91159 7.03648C8.04535 6.94371 8.15131 6.81721 8.21835 6.67025L9.86225 3.08813L11.5061 6.67025C11.5732 6.81721 11.6791 6.94371 11.8129 7.03648C11.9467 7.12925 12.1033 7.18488 12.2664 7.19753L15.896 7.48097L12.907 10.13C12.6475 10.3603 12.5442 10.7149 12.6392 11.046L13.7842 14.9916L10.3703 12.7502C10.2205 12.6512 10.0441 12.5983 9.86362 12.5983C9.68315 12.5983 9.50677 12.6512 9.35692 12.7502L5.7895 15.0924L6.74898 11.0019C6.78416 10.8515 6.77944 10.6946 6.73527 10.5465C6.6911 10.3984 6.60897 10.2639 6.49677 10.1561L3.72069 7.49087L7.45808 7.19753Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M4.85105 11.0901L3.48951 16.8956C3.44734 17.0714 3.46 17.2556 3.52582 17.4242C3.59165 17.5928 3.70757 17.738 3.85846 17.8407C4.00936 17.9434 4.1882 17.9989 4.37163 18C4.55506 18.0011 4.73456 17.9476 4.88668 17.8467L9.86225 14.5804L14.8378 17.8467C14.9935 17.9485 15.177 18.0009 15.3638 17.9968C15.5506 17.9928 15.7317 17.9325 15.8826 17.8241C16.0336 17.7158 16.1472 17.5644 16.2083 17.3906C16.2693 17.2167 16.2748 17.0286 16.224 16.8515L14.5527 11.0928L18.6976 7.41979C18.8304 7.30208 18.9252 7.14864 18.9703 6.97844C19.0155 6.80824 19.0089 6.62875 18.9516 6.46216C18.8942 6.29557 18.7885 6.14919 18.6476 6.04113C18.5066 5.93306 18.3366 5.86805 18.1585 5.85413L12.949 5.44562L10.6947 0.531792C10.6228 0.373567 10.506 0.239208 10.3583 0.144931C10.2105 0.0506541 10.0383 0.000488281 9.86225 0.000488281C9.68622 0.000488281 9.51395 0.0506541 9.36624 0.144931C9.21852 0.239208 9.10167 0.373567 9.02979 0.531792L6.77548 5.44562L1.56599 5.85323C1.39096 5.86688 1.22363 5.9299 1.08401 6.03475C0.944403 6.13959 0.838423 6.28182 0.778753 6.44442C0.719083 6.60703 0.70825 6.78311 0.747549 6.95162C0.786848 7.12013 0.874616 7.27391 1.00035 7.39459L4.85105 11.0901ZM7.45808 7.19753C7.62118 7.18488 7.77783 7.12925 7.91159 7.03648C8.04535 6.94371 8.15131 6.81721 8.21835 6.67025L9.86225 3.08813L11.5061 6.67025C11.5732 6.81721 11.6791 6.94371 11.8129 7.03648C11.9467 7.12925 12.1033 7.18488 12.2664 7.19753L15.896 7.48097L12.907 10.13C12.6475 10.3603 12.5442 10.7149 12.6392 11.046L13.7842 14.9916L10.3703 12.7502C10.2205 12.6512 10.0441 12.5983 9.86362 12.5983C9.68315 12.5983 9.50677 12.6512 9.35692 12.7502L5.7895 15.0924L6.74898 11.0019C6.78416 10.8515 6.77944 10.6946 6.73527 10.5465C6.6911 10.3984 6.60897 10.2639 6.49677 10.1561L3.72069 7.49087L7.45808 7.19753Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M4.85105 11.0901L3.48951 16.8956C3.44734 17.0714 3.46 17.2556 3.52582 17.4242C3.59165 17.5928 3.70757 17.738 3.85846 17.8407C4.00936 17.9434 4.1882 17.9989 4.37163 18C4.55506 18.0011 4.73456 17.9476 4.88668 17.8467L9.86225 14.5804L14.8378 17.8467C14.9935 17.9485 15.177 18.0009 15.3638 17.9968C15.5506 17.9928 15.7317 17.9325 15.8826 17.8241C16.0336 17.7158 16.1472 17.5644 16.2083 17.3906C16.2693 17.2167 16.2748 17.0286 16.224 16.8515L14.5527 11.0928L18.6976 7.41979C18.8304 7.30208 18.9252 7.14864 18.9703 6.97844C19.0155 6.80824 19.0089 6.62875 18.9516 6.46216C18.8942 6.29557 18.7885 6.14919 18.6476 6.04113C18.5066 5.93306 18.3366 5.86805 18.1585 5.85413L12.949 5.44562L10.6947 0.531792C10.6228 0.373567 10.506 0.239208 10.3583 0.144931C10.2105 0.0506541 10.0383 0.000488281 9.86225 0.000488281C9.68622 0.000488281 9.51395 0.0506541 9.36624 0.144931C9.21852 0.239208 9.10167 0.373567 9.02979 0.531792L6.77548 5.44562L1.56599 5.85323C1.39096 5.86688 1.22363 5.9299 1.08401 6.03475C0.944403 6.13959 0.838423 6.28182 0.778753 6.44442C0.719083 6.60703 0.70825 6.78311 0.747549 6.95162C0.786848 7.12013 0.874616 7.27391 1.00035 7.39459L4.85105 11.0901ZM7.45808 7.19753C7.62118 7.18488 7.77783 7.12925 7.91159 7.03648C8.04535 6.94371 8.15131 6.81721 8.21835 6.67025L9.86225 3.08813L11.5061 6.67025C11.5732 6.81721 11.6791 6.94371 11.8129 7.03648C11.9467 7.12925 12.1033 7.18488 12.2664 7.19753L15.896 7.48097L12.907 10.13C12.6475 10.3603 12.5442 10.7149 12.6392 11.046L13.7842 14.9916L10.3703 12.7502C10.2205 12.6512 10.0441 12.5983 9.86362 12.5983C9.68315 12.5983 9.50677 12.6512 9.35692 12.7502L5.7895 15.0924L6.74898 11.0019C6.78416 10.8515 6.77944 10.6946 6.73527 10.5465C6.6911 10.3984 6.60897 10.2639 6.49677 10.1561L3.72069 7.49087L7.45808 7.19753Z" fill="#F3CD03"/>\n' +
    '</svg>'
})

let ratedGroup = document.querySelectorAll('.jq-ry-rated-group')
ratedGroup.forEach(el => {
  el.innerHTML = '<svg width="19" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M19.02 6.46146C18.9626 6.29487 18.8569 6.1485 18.7159 6.0404C18.575 5.93231 18.405 5.86722 18.2269 5.85319L13.0174 5.44558L10.7631 0.531754C10.6913 0.37349 10.5745 0.239068 10.4268 0.144711C10.2792 0.050354 10.1069 9.52702e-05 9.9309 1.35311e-07C9.75487 -9.49996e-05 9.58258 0.0499776 9.43481 0.144175C9.28704 0.238372 9.17012 0.372668 9.09815 0.530855L6.84384 5.44558L1.63435 5.85319C1.45931 5.86684 1.29198 5.92986 1.15237 6.03471C1.01276 6.13955 0.906783 6.28178 0.847113 6.44439C0.787443 6.60699 0.776609 6.78308 0.815908 6.95158C0.855208 7.12009 0.942976 7.27388 1.06871 7.39455L4.91849 11.09L3.55695 16.8956C3.51561 17.0713 3.52886 17.2552 3.59498 17.4234C3.66111 17.5917 3.77705 17.7364 3.92777 17.839C4.07849 17.9415 4.25702 17.997 4.4402 17.9984C4.62338 17.9998 4.80276 17.9469 4.95504 17.8467L9.93061 14.5804L14.9062 17.8467C15.0618 17.9484 15.2454 18.0008 15.4322 17.9968C15.619 17.9927 15.8 17.9325 15.951 17.8241C16.102 17.7157 16.2156 17.5644 16.2766 17.3905C16.3377 17.2166 16.3432 17.0285 16.2924 16.8515L14.6211 11.0927L18.766 7.41975C19.0374 7.1786 19.137 6.80248 19.02 6.46146Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M19.02 6.46146C18.9626 6.29487 18.8569 6.1485 18.7159 6.0404C18.575 5.93231 18.405 5.86722 18.2269 5.85319L13.0174 5.44558L10.7631 0.531754C10.6913 0.37349 10.5745 0.239068 10.4268 0.144711C10.2792 0.050354 10.1069 9.52702e-05 9.9309 1.35311e-07C9.75487 -9.49996e-05 9.58258 0.0499776 9.43481 0.144175C9.28704 0.238372 9.17012 0.372668 9.09815 0.530855L6.84384 5.44558L1.63435 5.85319C1.45931 5.86684 1.29198 5.92986 1.15237 6.03471C1.01276 6.13955 0.906783 6.28178 0.847113 6.44439C0.787443 6.60699 0.776609 6.78308 0.815908 6.95158C0.855208 7.12009 0.942976 7.27388 1.06871 7.39455L4.91849 11.09L3.55695 16.8956C3.51561 17.0713 3.52886 17.2552 3.59498 17.4234C3.66111 17.5917 3.77705 17.7364 3.92777 17.839C4.07849 17.9415 4.25702 17.997 4.4402 17.9984C4.62338 17.9998 4.80276 17.9469 4.95504 17.8467L9.93061 14.5804L14.9062 17.8467C15.0618 17.9484 15.2454 18.0008 15.4322 17.9968C15.619 17.9927 15.8 17.9325 15.951 17.8241C16.102 17.7157 16.2156 17.5644 16.2766 17.3905C16.3377 17.2166 16.3432 17.0285 16.2924 16.8515L14.6211 11.0927L18.766 7.41975C19.0374 7.1786 19.137 6.80248 19.02 6.46146Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M19.02 6.46146C18.9626 6.29487 18.8569 6.1485 18.7159 6.0404C18.575 5.93231 18.405 5.86722 18.2269 5.85319L13.0174 5.44558L10.7631 0.531754C10.6913 0.37349 10.5745 0.239068 10.4268 0.144711C10.2792 0.050354 10.1069 9.52702e-05 9.9309 1.35311e-07C9.75487 -9.49996e-05 9.58258 0.0499776 9.43481 0.144175C9.28704 0.238372 9.17012 0.372668 9.09815 0.530855L6.84384 5.44558L1.63435 5.85319C1.45931 5.86684 1.29198 5.92986 1.15237 6.03471C1.01276 6.13955 0.906783 6.28178 0.847113 6.44439C0.787443 6.60699 0.776609 6.78308 0.815908 6.95158C0.855208 7.12009 0.942976 7.27388 1.06871 7.39455L4.91849 11.09L3.55695 16.8956C3.51561 17.0713 3.52886 17.2552 3.59498 17.4234C3.66111 17.5917 3.77705 17.7364 3.92777 17.839C4.07849 17.9415 4.25702 17.997 4.4402 17.9984C4.62338 17.9998 4.80276 17.9469 4.95504 17.8467L9.93061 14.5804L14.9062 17.8467C15.0618 17.9484 15.2454 18.0008 15.4322 17.9968C15.619 17.9927 15.8 17.9325 15.951 17.8241C16.102 17.7157 16.2156 17.5644 16.2766 17.3905C16.3377 17.2166 16.3432 17.0285 16.2924 16.8515L14.6211 11.0927L18.766 7.41975C19.0374 7.1786 19.137 6.80248 19.02 6.46146Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M19.02 6.46146C18.9626 6.29487 18.8569 6.1485 18.7159 6.0404C18.575 5.93231 18.405 5.86722 18.2269 5.85319L13.0174 5.44558L10.7631 0.531754C10.6913 0.37349 10.5745 0.239068 10.4268 0.144711C10.2792 0.050354 10.1069 9.52702e-05 9.9309 1.35311e-07C9.75487 -9.49996e-05 9.58258 0.0499776 9.43481 0.144175C9.28704 0.238372 9.17012 0.372668 9.09815 0.530855L6.84384 5.44558L1.63435 5.85319C1.45931 5.86684 1.29198 5.92986 1.15237 6.03471C1.01276 6.13955 0.906783 6.28178 0.847113 6.44439C0.787443 6.60699 0.776609 6.78308 0.815908 6.95158C0.855208 7.12009 0.942976 7.27388 1.06871 7.39455L4.91849 11.09L3.55695 16.8956C3.51561 17.0713 3.52886 17.2552 3.59498 17.4234C3.66111 17.5917 3.77705 17.7364 3.92777 17.839C4.07849 17.9415 4.25702 17.997 4.4402 17.9984C4.62338 17.9998 4.80276 17.9469 4.95504 17.8467L9.93061 14.5804L14.9062 17.8467C15.0618 17.9484 15.2454 18.0008 15.4322 17.9968C15.619 17.9927 15.8 17.9325 15.951 17.8241C16.102 17.7157 16.2156 17.5644 16.2766 17.3905C16.3377 17.2166 16.3432 17.0285 16.2924 16.8515L14.6211 11.0927L18.766 7.41975C19.0374 7.1786 19.137 6.80248 19.02 6.46146Z" fill="#F3CD03"/>\n' +
    '</svg>' +
    '<svg width="19" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M19.02 6.46146C18.9626 6.29487 18.8569 6.1485 18.7159 6.0404C18.575 5.93231 18.405 5.86722 18.2269 5.85319L13.0174 5.44558L10.7631 0.531754C10.6913 0.37349 10.5745 0.239068 10.4268 0.144711C10.2792 0.050354 10.1069 9.52702e-05 9.9309 1.35311e-07C9.75487 -9.49996e-05 9.58258 0.0499776 9.43481 0.144175C9.28704 0.238372 9.17012 0.372668 9.09815 0.530855L6.84384 5.44558L1.63435 5.85319C1.45931 5.86684 1.29198 5.92986 1.15237 6.03471C1.01276 6.13955 0.906783 6.28178 0.847113 6.44439C0.787443 6.60699 0.776609 6.78308 0.815908 6.95158C0.855208 7.12009 0.942976 7.27388 1.06871 7.39455L4.91849 11.09L3.55695 16.8956C3.51561 17.0713 3.52886 17.2552 3.59498 17.4234C3.66111 17.5917 3.77705 17.7364 3.92777 17.839C4.07849 17.9415 4.25702 17.997 4.4402 17.9984C4.62338 17.9998 4.80276 17.9469 4.95504 17.8467L9.93061 14.5804L14.9062 17.8467C15.0618 17.9484 15.2454 18.0008 15.4322 17.9968C15.619 17.9927 15.8 17.9325 15.951 17.8241C16.102 17.7157 16.2156 17.5644 16.2766 17.3905C16.3377 17.2166 16.3432 17.0285 16.2924 16.8515L14.6211 11.0927L18.766 7.41975C19.0374 7.1786 19.137 6.80248 19.02 6.46146Z" fill="#F3CD03"/>\n' +
    '</svg>'
})


let contactsFormEmail = document.querySelector('.great-business__email-input')

const formEmail = (contactsFormEmail) => {
  if(contactsFormEmail) {
    IMask(
      contactsFormEmail,
      {mask: /^\S*@?\S*$/}
    )
  }
}