import { useState, useEffect } from "react"
import { Character } from "../components/character-card/character-card";
import { getCharacters } from "../../services/ConsumeApi";
import "./home.css"

export const Home = () => {

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const IS_DISABLED_PREV_BUTTON = currentPage === 1;
    const IS_DISABLED_NEXT_BUTTON = currentPage === 42;

    useEffect(() => {
        const handleGetData = async () => {
            setCharacters(await getCharacters(currentPage));
        }
        handleGetData();
    }, [currentPage]);

    return (
        <>
            <section className="buttons-container">
                <button
                    type="button"
                    className="buttons-container__button"
                    disabled={IS_DISABLED_PREV_BUTTON}
                    onClick={() => { setCurrentPage(currentPage - 1) }}
                >Prev</button>
                <button
                    type="button"
                    className="buttons-container__button"
                    disabled={IS_DISABLED_NEXT_BUTTON}
                    onClick={() => { setCurrentPage(currentPage + 1) }}
                >Next</button>
            </section>
            <section>
                {characters.map(character => <Character key={character.id} character={character} />)}
            </section>
        </>
    );

}
