import React from 'react';
const LABEL_16633 = 'component_16633';
export function Component16633({ value = 16633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16633, 'data-value': derived.doubled }, children);
}
export default Component16633;
