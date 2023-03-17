//Testimonial Data
const testimonials = [
  {
    name: "Project Management",
    job: " Organizing folders and files",
    image: "Pictures/project.png",
    
  },
  {
    name: "Computer and Supplies",
    job: "Organizing folders and files",
    image: "Pictures/supplies.png",
    
  },
  {
    name: "Consulting Services",
    job: "Organizing folders and files",
    image: "Pictures/consult.png",
    
  },
  {
    name: "Software and Information Technology",
    job: "Organizing folders and files",
    image: "Pictures/software.png",
    
  },
  {
    name: "Training and Development",
    job: "Organizing folders and files",
    image: "Pictures/training.png",
    
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;