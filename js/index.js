const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Update the Nav with Correct Content
const navItem1 = document.querySelector('a:nth-of-type(1)');
const navItem2 = document.querySelector('a:nth-of-type(2)');
const navItem3 = document.querySelector('a:nth-of-type(3)');
const navItem4 = document.querySelector('a:nth-of-type(4)');
const navItem5 = document.querySelector('a:nth-of-type(5)');
const navItem6 = document.querySelector('a:nth-of-type(6)');

navItem1.textContent = siteContent.nav['nav-item-1'];
navItem2.textContent = siteContent.nav['nav-item-2'];
navItem3.textContent = siteContent.nav['nav-item-3'];
navItem4.textContent = siteContent.nav['nav-item-4'];
navItem5.textContent = siteContent.nav['nav-item-5'];
navItem6.textContent = siteContent.nav['nav-item-6'];

//Update CTA with Correct Content
const ctaTextH1 = document.querySelector('.cta-text h1');
const ctaTextButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img')

ctaTextH1.textContent = siteContent.cta.h1;
ctaTextButton.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta['img-src']);


//Update Main Content
const featureH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
const featureP = document.querySelector('.top-content .text-content:nth-of-type(1) p')

featureH4.textContent = siteContent["main-content"]["features-h4"];
featureP.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
const aboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p')

aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
const servicesP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')

servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesP.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
const productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')

productH4.textContent = siteContent["main-content"]["product-h4"];
productP.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
const visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')

visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionP.textContent = siteContent["main-content"]["vision-content"];


//Update Contact with Correct Content
const contactH4 = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

contactH4.textContent = siteContent.contact["contact-h4"];
address.textContent = siteContent.contact.address;
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;


//Update Footer with Correct Content
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;


// Navigation text to Green
const navItems = document.querySelectorAll('nav a');
navItems.forEach(item => item.style.color = 'green');

// Append + Prepend Items to Nav
const nav = document.querySelector('nav');

let copyOfNavItem1 = navItem1.cloneNode(true);
copyOfNavItem1.textContent = 'Home'
nav.prepend(copyOfNavItem1)

let copyOfNavItem2 = navItem2.cloneNode(true);
copyOfNavItem2.textContent = 'Dog';
nav.appendChild(copyOfNavItem2)