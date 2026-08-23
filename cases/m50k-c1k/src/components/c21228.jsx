import React from 'react';
const LABEL_21228 = 'component_21228';
export function Component21228({ value = 21228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21228, 'data-value': derived.doubled }, children);
}
export default Component21228;
