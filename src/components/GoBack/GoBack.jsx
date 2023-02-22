import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import s from '../GoBack/GoBack.module.scss';

const GoBack = () => {
  const location = useLocation();
  return (
    <div className={s.back}>
      <Link to={location.state?.from || '/'} className={s.goback}>
        <BiArrowBack /> Go back
      </Link>
    </div>
  );
};
export default GoBack;
