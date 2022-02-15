import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function Cell(props) {
  const { name, image, type } = props;
  return (
    <div className="teste">
      <h3>{name}</h3>
      <img src={ image } alt={ name } />
      <article>
        {
          type.map((item, index) => (
            <p key={ index } className={ item.type.name }>{item.type.name}</p>
          ))
        }
      </article>
    </div>
  );
}

Cell.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(string).isRequired,
};
