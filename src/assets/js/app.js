let moment = require('moment');

const radios = document.querySelectorAll('input[type="radio"]')
const additionalElements = document.querySelectorAll('.form-additional')
const categoryTags = document.querySelectorAll('.form-additional > .category-tag')
const searchInput = document.querySelector('#search-input')
const jokes = document.querySelector('.jokes')
const favourites = document.querySelector('.favourites')
const submit = document.getElementById('submit')
const storage = window.localStorage
const params = {
    path: null,
    queryParams: null,
}

addEventClickOnLikes()

renderFavourites()

for (const radio of radios) {
    radio.onclick = (e) => {
        showAdditional(e)

        switch (e.target.id) {
            case 'random':
            case 'categories': {
                params.path = 'random'
                break
            }
            case 'search': {
                params.path = 'search'
                break
            }
        }
    }
}

for (const categoryTag of categoryTags) {
    categoryTag.onclick = (e) => {
        function makeActiveCategoryTag(target) {
            target.classList.add('active')
        }

        for (let category of categoryTags) {
            category.classList.remove('active')
        }
        makeActiveCategoryTag(e.target)

        params.queryParams = {
            category: e.target.textContent.toLowerCase()
        }
    }
}

submit.onclick = (e) => {
    e.preventDefault()

    if (params.path) {
        if (params.path === 'search') {
            params.queryParams = {
                query: searchInput.value
            }
            let apiData = httpGetJokes(params)
            for (let joke of apiData.result) {
                addNewJokeToTheList(joke, true)
            }
        } else {
            let joke = httpGetJokes(params)
            addNewJokeToTheList(joke)
        }
    }
    addEventClickOnLikes()
}

function addNewJokeToTheList(joke, addAtTheStart = true, toFavourite = false) {
    let newJoke = document.createElement('div')
    newJoke.classList.add('joke')
    newJoke.setAttribute('data-id', joke.id)
    newJoke.innerHTML = cardTemplate(joke)

    let target = jokes
    if (toFavourite) {
        target = favourites
    }

    if (addAtTheStart) {
        target.prepend(newJoke)
    } else {
        target.append(newJoke)
    }
}

function showAdditional(e) {
    for (let additional of additionalElements) {
        additional.classList.remove('active')
    }
    let additional = e.target.closest('.form-control').querySelector('.form-additional')
    if (additional) {
        additional.classList.add('active')
    }
}

function httpGetJokes(params) {
    let baseUrl = 'https://api.chucknorris.io/jokes/' + params.path
    if (params.queryParams) {
        let queryParams = ''
        for (let name in params.queryParams) {
            queryParams = name + '=' + params.queryParams[name] + '&'
        }
        baseUrl += '?' + queryParams

    }

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", baseUrl, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function cardTemplate(data) {
    let category = ''
    if (data.categories && data.categories[0]) {
        category = '<div class="joke-category category-tag">' + data.categories[0] + '</div>'
    }

    let now = moment(new Date())
    let end = moment(data.updated_at)
    let duration = moment.duration(now.diff(end))
    let timeAgo = Math.floor(duration.asHours())

    let like = data.id in getStorageData() ? 'liked' : ''

    let template = `<div class="joke-actions">
        <span class="like ${like}"></span>
    </div>
    <div class="joke-icon">
        <div class="circle">
            <img src="assets/images/svg/message.svg" alt="message">
        </div>
    </div>
    <div class="joke-data">
        <div class="joke-id">
            <span>ID: </span><a href="${data.url}">${data.id}</a>
        </div>
        <div class="joke-text">${data.value}</div>
        <div class="joke-footer">
            <div class="joke-updated" data-time="${data.updated_at}">
                <span>Last update: <b>${timeAgo} hours ago</b></span>
            </div>
            ${category}
        </div>
    </div>`

    return template
}

function addEventClickOnLikes() {
    let likes = document.querySelectorAll('.like')
    for (const like of likes) {
        like.onclick = (e) => {
            let joke = e.target.closest('.joke')

            let id = joke.getAttribute('data-id')
            let JokeObject = {
                id: id,
                url: joke.querySelector('.joke-id > a').getAttribute('href'),
                value: joke.querySelector('.joke-text').textContent,
                updated_at: joke.querySelector('.joke-updated').getAttribute('data-time'),
                categories: joke.querySelector('.joke-category') ? {0: joke.querySelector('.joke-category').textContent} : null,
            }

            let favouritesData = getStorageData('favourites')
            if (!favouritesData) {
                favouritesData = {}
            }

            if (!favouritesData[id]) {
                favouritesData[id] = JokeObject
            } else {
                delete favouritesData[id]
            }

            storage.setItem('favourites', JSON.stringify(favouritesData))

            let sameJokes = document.querySelectorAll(`[data-id='${id}']`)
            for (let sameJoke of sameJokes) {
                sameJoke.querySelector('.like').classList.toggle('liked')
            }
            renderFavourites()
        }
    }
}

function renderFavourites() {
    favourites.textContent = ''
    let favouritesData = JSON.parse(storage.getItem('favourites'))
    if (!favouritesData) {
        return
    }

    for (let joke of Object.values(favouritesData)) {
        addNewJokeToTheList(joke, true, true)
    }
    addEventClickOnLikes()
}

function getStorageData() {
    let data = JSON.parse(storage.getItem('favourites'))
    if (!data) {
        data = {}
    }
    return data;
}