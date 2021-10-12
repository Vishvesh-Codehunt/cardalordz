function scrollrevealStart(){
    
  ScrollReveal().reveal('.sr-top-slow',{
      delay: 200,
      duration: 1500,
      origin: 'top',
      distance: '20px',
      opacity: 0,
  })
  
  ScrollReveal().reveal('.sr-top-fast',{
      delay: 200,
      duration: 800,
      origin: 'top',
      distance: '20px'
  })
  
  ScrollReveal().reveal('.sr-top-fast-delayed',{
      delay: 500,
      duration: 800,
      origin: 'top',
      distance: '20px'
  })
  
  ScrollReveal().reveal('.sr-top-more-delayed',{
      delay: 800,
      duration: 800,
      origin: 'top',
      distance: '20px'
  })
  
  ScrollReveal().reveal('.sr-right-fast',{
      delay: 300,
      duration: 800,
      origin: 'right',
      distance: '20px'
  })
  
  ScrollReveal().reveal('.sr-right-fast-delayed',{
      delay: 700,
      duration: 800,
      origin: 'right',
      distance: '20px'
  })
  
  ScrollReveal().reveal('.sr-right-super-delayed',{
      delay: 800,
      duration: 1000,
      origin: 'right',
      distance: '20px'
  })
  
  ScrollReveal().reveal('.sr-left-fast',{
      delay: 600,
      duration: 800,
      origin: 'left',
      distance: '10px'
  })
  
  ScrollReveal().reveal('.sr-opacity-delayed',{
      delay: 1000,
      duration: 800,
      opacity: 0
  })
  
  ScrollReveal().reveal('.sr-bottom-more-delayed',{
      delay: 600,
      duration: 1200,
      origin: 'bottom',
      distance: '10px'
  })
}