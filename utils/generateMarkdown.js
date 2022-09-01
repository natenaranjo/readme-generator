function generateMarkdown(data) {
return `
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/${data.username}/${data.repo}">
    <img src="img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">${data.title}</h2>

  <p align="center">
    Explore the document by the links below:
    <br />
    <a href="https://github.com/${data.username}/${data.repo}"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${data.username}/${data.repo}">View Demo</a>
    ·
    <a href="https://github.com/${data.username}/${data.repo}/issues">Report Bug</a>
    ·
    <a href="https://github.com/${data.username}/${data.repo}/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Screenshot][project-screenshot]](https://github.com/${data.username}/${data.repo})

${data.description}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Installation

${data.installation}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- USAGE EXAMPLES -->
## Usage

${data.usage}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/${data.username}/${data.repo}/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTRIBUTING -->
## Contributing

${data.contributing}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->
## License

${data.licenseBadge}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTACT -->
## Contact

Github  - [${data.username}](https://github.com/${data.username})  
Twitter - [@${data.twitter}](https://twitter.com/${data.twitter})
Email   - [Email Me](${data.email})

Project Link: [https://github.com/${data.username}/${data.repo}](https://github.com/${data.username}/${data.repo})

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/${data.username}/${data.repo}.svg?style=for-the-badge
[contributors-url]: https://github.com/${data.username}/${data.repo}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${data.usename}/${data.repo}.svg?style=for-the-badge
[forks-url]: https://github.com/${data.username}/${data.repo}/network/members
[stars-shield]: https://img.shields.io/github/stars/${data.username}/${data.repo}.svg?style=for-the-badge
[stars-url]: https://github.com/${data.username}/${data.repo}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${data.username}/${data.repo}.svg?style=for-the-badge
[issues-url]: https://github.com/${data.username}/${data.repo}/issues
[license-shield]: https://img.shields.io/github/license/${data.username}/${data.repo}.svg?style=for-the-badge
[license-url]: https://github.com/${data.username}/${data.repo}/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/${data.username}
[project-screenshot]: /img/screenshot.png


`}

module.exports = generateMarkdown;