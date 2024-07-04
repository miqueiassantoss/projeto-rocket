function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img') //pesquisa pelo mesmo seletor css
  if(html.classList.contains('light')){
  img.setAttribute('src', './assets/avatar-light.png') //função pra modificar um atributo
  } else{
    img.setAttribute('src', './assets/avatar.png')
  }

  //só pra treinar, fiz com que mudasse o alt da imagem
  const texto = document.querySelector('#profile img')
  if(html.classList.contains('light')){
    img.setAttribute('alt', 'Nova tag')
  } else {
    img.setAttribute('alt', 'novo texto2')
  }

  }
