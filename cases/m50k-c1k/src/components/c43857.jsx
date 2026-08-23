import React from 'react';
const LABEL_43857 = 'component_43857';
export function Component43857({ value = 43857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43857, 'data-value': derived.doubled }, children);
}
export default Component43857;
