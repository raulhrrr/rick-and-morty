import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../components/character-card/character-card";
import { getCharacterInfo } from "../../services/ConsumeApi";

export const CharacterInfo = () => {

    const { characterId } = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        const handleGetData = async () => {
            setCharacter(await getCharacterInfo(characterId));
        }
        handleGetData();
    }, []);

    return (
        <>
            <Character key={character.id} character={character} />
            <button></button>
        </>
    );

}
