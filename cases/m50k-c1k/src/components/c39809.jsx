import React from 'react';
const LABEL_39809 = 'component_39809';
export function Component39809({ value = 39809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39809, 'data-value': derived.doubled }, children);
}
export default Component39809;
