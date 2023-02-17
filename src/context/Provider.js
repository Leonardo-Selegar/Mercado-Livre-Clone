import React, { useState, useMemo } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
  const [emailContext, setEmailContext] = useState('');

  const context = useMemo(() => ({
    emailContext,
    setEmailContext,
  }), [ emailContext, setEmailContext ]);

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
