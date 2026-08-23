import React from 'react';
const LABEL_13216 = 'component_13216';
export function Component13216({ value = 13216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13216, 'data-value': derived.doubled }, children);
}
export default Component13216;
