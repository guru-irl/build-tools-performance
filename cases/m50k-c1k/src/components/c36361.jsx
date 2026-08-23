import React from 'react';
const LABEL_36361 = 'component_36361';
export function Component36361({ value = 36361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36361, 'data-value': derived.doubled }, children);
}
export default Component36361;
