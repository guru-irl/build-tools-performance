import React from 'react';
const LABEL_29495 = 'component_29495';
export function Component29495({ value = 29495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29495, 'data-value': derived.doubled }, children);
}
export default Component29495;
