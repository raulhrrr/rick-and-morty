import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Character } from "../components/character-card/character-card";
import { getCharacterInfo } from "../../services/ConsumeApi";
import './character-info.css';

export const CharacterInfo = () => {

    const { characterId } = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const handleGetData = async () => {
            setCharacters([await getCharacterInfo(characterId)]);
        }
        handleGetData();
    }, []);

    return (
        <>
            <section>
                {characters.map(character => <Character key={character.id} character={character} />)}
            </section>
            <div className="container"><Link className="button-return" to={'/'}>Return</Link></div>
        </>
    );

}
