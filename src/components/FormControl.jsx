import '../assets/styles/_form.scss'
import RadioInput from "./UI/RadioInput";
import {useState} from "react";
import TextInput from "./UI/TextInput";
import Submit from "./UI/Submit";

function FormControl() {
    const [selectedId, setSelectedId] = useState()

    function setOpenedId(e) {
        setSelectedId(e.target.id)
    }

    return (
        <form className="form">

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
                <div className="category-tag">Animal</div>
                <div className="category-tag">Career</div>
                <div className="category-tag">Celebrity</div>
                <div className="category-tag">dev</div>
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
                />
            </RadioInput>

            <Submit
                title='Get a joke'
            />
        </form>
    )
}

export default FormControl