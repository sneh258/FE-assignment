import React, { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const FeatureContext = createContext();

export function FeatureProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  return <FeatureContext.Provider value={{ toggle, setToggle }}>{children}</FeatureContext.Provider>;
}
FeatureProvider.propTypes = {
  children: PropTypes.node.isRequired,
};