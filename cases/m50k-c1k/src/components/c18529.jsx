import React from 'react';
const LABEL_18529 = 'component_18529';
export function Component18529({ value = 18529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18529, 'data-value': derived.doubled }, children);
}
export default Component18529;
