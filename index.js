//  Array of Names and descriptions of the movies  
let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 2.png"
    },
    {
      name: "loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 5.png"
    }
  ];

  const carousel=document.querySelector('.carousel');
  let sliders=[]; // Empty array 

  let slideIndex=0; //  Variable to Track the current slide

  // Function to check slide index
  const createSlide =()=>{
    if(slideIndex>=movies.length){
      slideIndex=0;
    }

    // Create DOM Elements
    let slide= document.createElement('div');
    let imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    // Attacing all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    // Setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++

    // Setting elements class names. PS: it should be exactly the same as the ones used in the CSS
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    // We will end this function by pushing the slide elements to the slide array
    sliders.push(slide);

    // Slide effect of the slider
    if(slide.length)
    {
      // Negative after calc is beacause we want negative left margin and the hundered because we want the slider  to go 100% of the screen. 
      // Afer that we multiply 100 with the calculations because we want 100 -100% per slide. Now, we subtract 2 from slider.lenggth because we want second slide to be in the middle and we will subtract this margin value from this 100%. we are doing the same here with the 30 part becuase we have 30 px magin on the right.

      if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100* (sliders.length - 2)}% - ${30 *(sliders.length - 2)}
        px)`;
      }
    };

    // Since, we need to call this function more than one times because we need the sliding effect

    for(let i=0; i<3; i++)
    {
      createSlide();
    }

    // using set interval because we need the sliders to slide after some interval
    setInterval(()=>{
      createSlide();
    },3000);
  };

