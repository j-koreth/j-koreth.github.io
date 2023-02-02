function setWhiteTheme(){
    console.log("White");
    document.body.style.setProperty('--main-bg-color', '#f7f7f7');
    document.body.style.setProperty('--secondary-bg-color', 'rgb(245, 245, 245)');
    document.body.style.setProperty('--tertiary-bg-color', '#f0f0f0');
    document.body.style.setProperty('--main-text-color', '#000000FF');
    document.body.style.setProperty('--secondary-text-color', '#3C3C4399');
    document.body.style.setProperty('--tertiary-text-color', '#3C3C434D');
    document.body.style.setProperty('--separator-color', '#3C3C434A');
    document.body.style.setProperty('--shadow-colors', 'rgb(0, 0, 0)');
    document.body.style.setProperty('--grid-container-background', 'rgb(215, 215, 215)');
    localStorage.setItem("theme", "white");
  }

  function setDarkTheme(){
      console.log("Black");
      document.body.style.setProperty('--main-bg-color', '#000000FF');
      document.body.style.setProperty('--secondary-bg-color', '#1C1C1EFF');
      document.body.style.setProperty('--tertiary-bg-color', '#2C2C2EFF');
      document.body.style.setProperty('--main-text-color', '#DDD');
      document.body.style.setProperty('--secondary-text-color', '#EBEBF599');
      document.body.style.setProperty('--tertiary-text-color', '#EBEBF54D');
      document.body.style.setProperty('--separator-color', '#54545899');
      document.body.style.setProperty('--shadow-colors', 'rgb(83, 83, 83)');
      document.body.style.setProperty('--grid-container-background', 'rgb(62, 62, 62)');


      localStorage.setItem("theme", "dark");
  }

  function toggleTheme() {
    var style = getComputedStyle(document.body);
    console.log(style.getPropertyValue('--main-bg-color'));
    var bg = style.getPropertyValue('--main-bg-color');
    
    if(bg == "#f7f7f7"){
        setDarkTheme();
    }
    else{
        setWhiteTheme();
    }
  }