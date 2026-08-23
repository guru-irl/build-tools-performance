import React from 'react';
const LABEL_21909 = 'component_21909';
export function Component21909({ value = 21909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21909, 'data-value': derived.doubled }, children);
}
export default Component21909;
