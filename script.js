// =====================================NAVBAR=============

const navbar = document.createElement('ul');

navbar.innerHTML = `
<li><a href="index.html">Home</a></li>
            <li><a href="about-me.html">About</a></li>
            <li><a href="recent-posts.html">Recent posts</a></li>
`;

document.querySelector('.navigation').append(navbar);

function highlightCurrentURL() {
  let a = document.querySelector('.navigation').getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
    if (a[i].href.split('#')[0] == document.location.href.split('#')[0]) {
      a[i].className = 'current-page';
    }
  }
}

window.onload = function () {
  highlightCurrentURL();
};

// ====== FOOTER =====

const footer = document.createElement('footer');

footer.innerHTML = `
<p>Blogspot</p>
      <p>
        This project was coded by
        <a
          href="https://clever-turing-3f9e94.netlify.app/"
          target="_blank"
          title="Portfolio link"
          >Klesta Luli</a
        >
        |
        <a
          href="https://github.com/klezi10/blogspot"
          target="_blank"
          title="Github code"
          >Open-source</a
        >
      </p>
`;

document.querySelector('.footer').append(footer);
