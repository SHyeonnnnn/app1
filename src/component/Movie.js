import React from 'react';

const movie = ({movie, removeMovie}) => {
    return (
      <div className='movie'>
          <div className='movie-title'>{movie.title}
            <span className='movie-year'>{movie.year}</span>
          </div>
          <div><button className='reBtn' onClick={()=>removeMovie(movie.id)}>삭제</button></div>
  
      </div>
    );
};

export default movie;