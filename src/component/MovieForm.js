import { useState, useRef, useEffect } from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle,setMovieTitle] = useState('');
    const [movieYear,setMovieYear] = useState('');
    const [titleError,setTitleError] = useState('');
    const [yearError,setYearError] = useState('');

    const validateForm = () => {
        resetErrors();
        let validate=true;
        if(!movieTitle){
            setTitleError('영화제목을 입력하세요.');
            validate=false;
        }
        if(!movieYear){
            setYearError('개봉연도를 입력하세요')
            validate=false;
        }
        return validate;
    }

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
            addMovie({
                id:Date.now(),
                title:movieTitle,
                year:movieYear
            })
        }
       
        setMovieTitle('')
        setMovieYear('')
        inputRef.current.focus();
      }

    const inputRef=useRef();

    useEffect(() => {
        inputRef.current.focus();//시작하자마자 인풋창 포커스
            },[]);

    return (
        <form action='#' onSubmit={onSubmit}>
            <input type='text' ref={inputRef} placeholder='영화제목을 쓰세요' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}}></input>{/* onChange=타자칠수있게됨 */}
            <div className='alret'>{titleError}</div>
            <input type='text' placeholder='개봉연도를 쓰세요' value={movieYear} onChange={(e)=>{setMovieYear(e.target.value)}}></input>
            <div className='alret'>{yearError}</div>
            <button type='submit' className='addBtn'>ADD</button>
        </form>
    );
};

export default MovieForm;