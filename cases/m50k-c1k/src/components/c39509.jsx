import React from 'react';
const LABEL_39509 = 'component_39509';
export function Component39509({ value = 39509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39509, 'data-value': derived.doubled }, children);
}
export default Component39509;
