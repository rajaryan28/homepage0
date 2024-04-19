let bg=document.querySelectorAll("background")
bg=["https://img.freepik.com/premium-photo/colourful-ombre-background-red-black_218148-759.jpg?size=626&ext=jpg","https://th.bing.com/th/id/OIP.-iNOZvmOUcDJBS2QIt-7xQHaEK?rs=1&pid=ImgDetMain","https://static.vecteezy.com/system/resources/previews/006/689/286/non_2x/gradient-background-for-banner-wallpaper-graphic-design-web-poster-needs-free-photo.jpg","https://i.pinimg.com/originals/4b/5c/32/4b5c32ee74a16648ae508b940154e4ad.jpg","https://genekeys.com/wp-content/uploads/2021/08/Backgrounds-All_00007.jpg"]
bg.src=Math.floor(Math.random() *bg.length) 

function setRandomBackground() {
    const images = [
      "https://wallpaperaccess.com/full/2059891.jpg","https://genekeys.com/wp-content/uploads/2021/08/Backgrounds-All_00007.jpg","https://static.vecteezy.com/system/resources/previews/004/871/710/non_2x/abstract-grunge-texture-background-free-vector.jpg","https://i.cdn-sc.com/MediaVaultImages/10373_thumbnail.jpg","https://static.wixstatic.com/media/9753c1_1886fe50641b408fa2d38aa997af4818~mv2.jpg/v1/fill/w_517,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9753c1_1886fe50641b408fa2d38aa997af4818~mv2.jpg"
      // Add more images to the array
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'random';
  }
  
  // Call the function to set the initial background (optional)
  setRandomBackground();
  
  // Call the function on other events (optional)
  // For example, on page load:
  window.addEventListener('load', setRandomBackground);
  // Or on button click:
  const button = document.getElementById('changeBackgroundButton');
  button.addEventListener('click', setRandomBackground);
  