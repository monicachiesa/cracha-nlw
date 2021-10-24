
function showMeSomething() {
    alert(link.instagram)
  } 
  const linksSocialMedia = {
     github: "monicachiesa",
   facebook: "monica.chiesa.564",
   instagram: "monica_chiesa"
  
  }
  
  function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
   const social = li.getAttribute('class')
  
   li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
  }
  changeSocialMediaLinks()
  
  function getGitHubProfileInfos() {
      const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
      fetch(url)
.then(response =>  response.json())
.then(data => {
    userName.textContent = data.name
    userBio.textContent = data.userBio
    userLink.href = data.html_url
    userImage.src = data.avatar.url
    userLink.textContent = data.login
})
    }



  function getGitHubProfileInfos() 