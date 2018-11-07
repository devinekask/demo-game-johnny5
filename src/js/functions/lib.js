export const random = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
};

export const map = (value, istart, istop, ostart, ostop) => {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};

export const loadImage = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', event => {
      resolve(img);
    });
    img.addEventListener('error', event => {
      reject(event);
    });
    img.setAttribute('src', url);
    if(img.complete) {
      resolve(img);
    }
  });
};
