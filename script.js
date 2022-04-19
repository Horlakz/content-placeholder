const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 750)

function getData() {
            header.innerHTML = '<img src = "images/showcase.jpg">'
            title.innerHTML = 'This is a content placeholder'
            excerpt.innerHTML = 'My name is Olakotan Daniel and I am learning to code'
            profile_img.innerHTML = '<img src = "images/author.jpg">'
            name.innerHTML = 'Olakotan Daniel'
            date.innerHTML = 'Oct 17, 2003'

            animated_bgs.forEach(item => item.classList.remove('animated-bg'))
            animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}