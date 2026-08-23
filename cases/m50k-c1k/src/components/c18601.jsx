import React from 'react';
const LABEL_18601 = 'component_18601';
export function Component18601({ value = 18601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18601, 'data-value': derived.doubled }, children);
}
export default Component18601;
