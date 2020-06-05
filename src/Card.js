import React from 'react';
import 'tachyons';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc dib br4 pa3 ma2 grow bw2 shadow-5 bg-light-green'>

            <img alt='robots' src={`https://robohash.org/${id}200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;