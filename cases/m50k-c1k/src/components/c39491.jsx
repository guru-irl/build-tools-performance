import React from 'react';
const LABEL_39491 = 'component_39491';
export function Component39491({ value = 39491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39491, 'data-value': derived.doubled }, children);
}
export default Component39491;
