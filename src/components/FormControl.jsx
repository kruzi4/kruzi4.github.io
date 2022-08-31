import '../assets/styles/_form.scss'
import RadioInput from "./UI/RadioInput";
import {useEffect, useState} from "react";
import TextInput from "./UI/TextInput";
import Submit from "./UI/Submit";
import JokeService from "../API/JokeService";
import CategoryList from "./CategoryList";

function FormControl({append}) {
    const [selectedId, setSelectedId] = useState()
    const [selectedCategory, setSelectedCategory] = useState()
    const [searchValue, setSearchValue] = useState()

    function setSearchVal(e) {
        setSearchValue(e.target.value)
    }

    function setOpenedId(e) {
        setSelectedId(e.target.id)
    }

    function setCategory (category) {
        setSelectedCategory(category)
    }

    const [categories, setCategories] = useState()
    useEffect(async () => {
        const cats = await JokeService.getCategories()
        setCategories(cats.data)
    }, [])

    async function getJoke(e) {
        e.preventDefault()

        let joke
        switch (selectedId) {
            case 'random':
                joke = await JokeService.getRandom()
                break
            case 'category':
                joke = await JokeService.getRandom(selectedCategory)
                break
            case 'search':
                joke = await JokeService.getOneBySearch(searchValue)
                break
        }

        append(joke.data)
    }

    return (
        <form
            className="form"
            onSubmit={getJoke}
        >

            <RadioInput
                name='find_joke'
                label='Random'
                id='random'
                selectedId={selectedId}
                onClick={setOpenedId}
            />

            <RadioInput
                name='find_joke'
                label='Category'
                id='category'
                selectedId={selectedId}
                onClick={setOpenedId}
            >
                <CategoryList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    select={setCategory}
                />
            </RadioInput>

            <RadioInput
                name='find_joke'
                label='Search'
                id='search'
                selectedId={selectedId}
                onClick={setOpenedId}
            >
                <TextInput
                    name="search"
                    placeholder="Free text search..."
                    onChange={setSearchVal}
                />
            </RadioInput>

            <Submit
                title='Get a joke'
            />
        </form>
    )
}

export default FormControl