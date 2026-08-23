import React from 'react';
const LABEL_31633 = 'component_31633';
export function Component31633({ value = 31633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31633, 'data-value': derived.doubled }, children);
}
export default Component31633;
