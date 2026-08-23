import React from 'react';
const LABEL_3597 = 'component_3597';
export function Component3597({ value = 3597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3597, 'data-value': derived.doubled }, children);
}
export default Component3597;
