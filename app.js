const joinIn = document.querySelector('.join-today').onclick = function () {
  location.href = "https://gracious-ptolemy-4a8ec7.netlify.com/";
};

const createAcct = document.querySelector('.create-account');
createAcct.addEventListener('mouseover',() =>{
  alert('Don\'t forget to sign up for our weekly newletter!')
});





class TabTag {
  
  constructor(tag) {
     
    
    this.tabPage = document.querySelector(`.page[data-tab='${tag.dataset.tab}']`);
    
    
    this.tabPage = new Page(this.tabPage);
    
    
    
    tag.addEventListener('click', () => this.tagClick() );
  }
  
  
  tagClick() {
    this.tabPage.togglePage();
  }
}


class Page {
  constructor(site) {
    
    
    this.site = site;
  }
  
  togglePage() {
    this.site.classList.toggle('change');
  }
}


const tags = document.querySelectorAll('.aboutLink');
tags.forEach(tag => new TabTag(tag));


