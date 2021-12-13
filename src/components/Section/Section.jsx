import React from 'react';
import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
