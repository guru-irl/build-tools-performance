import React from 'react';
const LABEL_18919 = 'component_18919';
export function Component18919({ value = 18919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18919, 'data-value': derived.doubled }, children);
}
export default Component18919;
