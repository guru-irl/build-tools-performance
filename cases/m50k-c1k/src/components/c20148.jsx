import React from 'react';
const LABEL_20148 = 'component_20148';
export function Component20148({ value = 20148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20148, 'data-value': derived.doubled }, children);
}
export default Component20148;
