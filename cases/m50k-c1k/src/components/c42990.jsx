import React from 'react';
const LABEL_42990 = 'component_42990';
export function Component42990({ value = 42990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42990, 'data-value': derived.doubled }, children);
}
export default Component42990;
