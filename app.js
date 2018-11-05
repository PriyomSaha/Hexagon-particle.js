/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('hexagon',
  
  {
    "particles": {
      "number": {
        "value": 30,
		"width":500,
		"height":500,
        "density": {
          "enable": false,
          "value_area": 500
        }
      },
      "color": {
        "value": "#00f9ff"
      },
      "shape": {
        "type": ["image","polygon"],
        "stroke": {
          "width":0,
          "color": "#00f9ff"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "hexagon.png",
          "width": 500,
          "height": 500
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value":50,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 10,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#026463",
        "opacity": 1,
        "width":2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
		"bounce": false,
        "random": false,
        "straight": false,
        "out_mode": "in",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
              "repulse": {
        "distance": 200,
        "duration": 0.4
      },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    
  }

);

