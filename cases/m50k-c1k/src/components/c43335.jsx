import React from 'react';
const LABEL_43335 = 'component_43335';
export function Component43335({ value = 43335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43335, 'data-value': derived.doubled }, children);
}
export default Component43335;
