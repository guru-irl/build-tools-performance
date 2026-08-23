import React from 'react';
const LABEL_43673 = 'component_43673';
export function Component43673({ value = 43673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43673, 'data-value': derived.doubled }, children);
}
export default Component43673;
