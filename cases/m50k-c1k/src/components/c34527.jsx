import React from 'react';
const LABEL_34527 = 'component_34527';
export function Component34527({ value = 34527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34527, 'data-value': derived.doubled }, children);
}
export default Component34527;
