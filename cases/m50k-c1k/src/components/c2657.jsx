import React from 'react';
const LABEL_2657 = 'component_2657';
export function Component2657({ value = 2657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2657, 'data-value': derived.doubled }, children);
}
export default Component2657;
