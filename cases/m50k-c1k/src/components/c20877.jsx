import React from 'react';
const LABEL_20877 = 'component_20877';
export function Component20877({ value = 20877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20877, 'data-value': derived.doubled }, children);
}
export default Component20877;
