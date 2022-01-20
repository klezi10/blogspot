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
