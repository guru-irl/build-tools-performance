import React from 'react';
const LABEL_16482 = 'component_16482';
export function Component16482({ value = 16482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16482, 'data-value': derived.doubled }, children);
}
export default Component16482;
