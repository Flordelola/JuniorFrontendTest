
function createElement(parentElement, variable, element, id, cssClass) {

  var elementVariable = variable;
  elementVariable = document.createElement(element);
  parentElement.appendChild(elementVariable);
  elementVariable.setAttribute('id', id);
  elementVariable.setAttribute('class', cssClass || 'defaultClass');
  return elementVariable;
}

function clearElement(element) {
  
  var elementVariable = element;
  while (elementVariable.firstChild) {
    elementVariable.removeChild(element.firstChild);
  }
}

class Design {
  
  static toggleText(value) {
    var text = document.getElementById('username');
    text.value = value;
  }
  
  static displayError() {
    var userInfo = document.getElementById('user_info'), userError;
    
    clearElement(userInfo);
    document.getElementById('data').setAttribute('class', 'error');
    
    createElement(userInfo, userError, 'div', 'error_div')
    .innerHTML = "User does not exist";
  }

  static displayHeader(data) {
    var userInfo = document.getElementById('user_info'), r, avatar, login, fullName, bio;
    var r = JSON.parse(data);
    
    clearElement(userInfo);
    document.getElementById('data').setAttribute('class', 'data');
    
    createElement(userInfo, avatar, 'img', 'avatar')
    .setAttribute('src', r.avatar_url);
    createElement(userInfo, login, 'p', 'login')
    .innerHTML = r.login;
    createElement(userInfo, fullName, 'h1', 'fullname')
    .innerHTML = (r.name || "Name unavailable");
    createElement(userInfo, bio, 'p', 'bio')
    .innerHTML = (r.bio || "Bio unavailable");
  }

  static displayList(data) {
    var userInfo = document.getElementById('user_info');
    var r = JSON.parse(data);
    
    createElement(userInfo, 'Title', 'h2', 'list_title')
    .innerHTML = "Repositories";
    createElement(userInfo, 'title_hr', 'hr', 'title_hr');
    
    for (let i = 0; i < r.length; i++) {
      createElement(userInfo, null, 'p', r[i].id, 'repos_list')
      .innerHTML = r[i].name;
      createElement(userInfo, null, 'span', null, 'number_star')
      .innerHTML = r[i].stargazers_count;
      createElement(userInfo, null, 'img', null, 'star_img' )
      .setAttribute('src', 'images/star.png');
      createElement(userInfo, null, 'span', null, 'number_fork')
      .innerHTML = r[i].forks;
      createElement(userInfo, null, 'img', null, 'fork_img' )
      .setAttribute('src', 'images/fork.png');
    }
  }
}
