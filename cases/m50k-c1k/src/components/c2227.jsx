import React from 'react';
const LABEL_2227 = 'component_2227';
export function Component2227({ value = 2227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2227, 'data-value': derived.doubled }, children);
}
export default Component2227;
