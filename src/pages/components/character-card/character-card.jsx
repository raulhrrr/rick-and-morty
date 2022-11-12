import { Link } from "react-router-dom"
import "./character-card.css";

export const Character = ({ character }) => (
    <article className="card">
        <div className="card__image">
            <img src={character.image} alt={character.name} />
        </div>
        <div className="card__content">
            <div className="card__content-head">
                <Link to={`/character/${character.id}`}>
                    <h2>{character.name}</h2>
                </Link>
                <span className="card__text card__text--bold">
                    <span
                        className={`card__content__status card__content__status--${character.status.toLowerCase()}`}
                    ></span>
                    {`${character.status} - ${character.species}`}
                </span>
            </div>
            <div className="card__content-body">
                <div>
                    <span className="card__text--bold">Género:</span>
                    <p className="card__text">{character.gender}</p>
                </div>
                <div>
                    <span className="card__text--bold">Origen:</span>
                    <p className="card__text">{character.origin.name}</p>
                </div>
                <div>
                    <span className="card__text--bold">Localización:</span>
                    <p className="card__text">{character.location.name}</p>
                </div>
            </div>
        </div>
    </article>
)
