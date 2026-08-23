import React from 'react';
const LABEL_296 = 'component_296';
export function Component296({ value = 296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_296, 'data-value': derived.doubled }, children);
}
export default Component296;
