import React from 'react';
const LABEL_2251 = 'component_2251';
export function Component2251({ value = 2251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2251, 'data-value': derived.doubled }, children);
}
export default Component2251;
