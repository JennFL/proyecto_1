(() => {
    "use strict";
  
    const storedTheme = localStorage.getItem("theme");
  
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme;
      }
  
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };
  
    const setTheme = function (theme) {
      if (
        theme === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
      }
    };
  
    setTheme(getPreferredTheme());
  
    const showActiveTheme = (theme) => {
      const activeThemeIcon = document.querySelector(".theme-icon-active use");
      const btnToActive = document.querySelector(
        `[data-bs-theme-value="${theme}"]`
      );
      const svgOfActiveBtn = btnToActive
        .querySelector("svg use")
        .getAttribute("href");
  
      document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
        element.classList.remove("active");
      });
  
      btnToActive.classList.add("active");
      activeThemeIcon.setAttribute("href", svgOfActiveBtn);
    };
  
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (storedTheme !== "light" || storedTheme !== "dark") {
          setTheme(getPreferredTheme());
        }
      });
  
    window.addEventListener("DOMContentLoaded", () => {
      showActiveTheme(getPreferredTheme());
  
      document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          const theme = toggle.getAttribute("data-bs-theme-value");
          localStorage.setItem("theme", theme);
          setTheme(theme);
          showActiveTheme(theme);
        });
      });
    });
  })();

(function(){
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', () =>{
                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item--active');


                if(subMenu.clientHeight === 0){
                    height= subMenu.scrollHeight;
                }
                subMenu.style.height = `${height}px`;
                

            });
        });
    }
    const deleteStyleHeight = () =>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item--active');
            }
        });
    }
    
    window.addEventListener('resize',()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click',()=> list.classList.toggle('menu_links--show'));

})();


let favorito = document.querySelector('.favorito');
let favorito_boton = document.querySelector('.favorito_boton');
let contador = 0;
let imgMostrada = "assets/heart3";

favorito_boton.addEventListener("click",()=>{
    if(imgMostrada == "assets/heart3" ){
        favorito.src = "assets/heart2.svg";
        imgMostrada = "assets/heart2";
    }
    else{
        favorito.src = "assets/heart3.svg";
        imgMostrada = "assets/heart3";
    }
})

