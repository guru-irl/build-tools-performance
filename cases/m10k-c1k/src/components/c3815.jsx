import React from 'react';
const LABEL_3815 = 'component_3815';
export function Component3815({ value = 3815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3815, 'data-value': derived.doubled }, children);
}
export default Component3815;
