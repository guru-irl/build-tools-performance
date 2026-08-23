import React from 'react';
const LABEL_20423 = 'component_20423';
export function Component20423({ value = 20423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20423, 'data-value': derived.doubled }, children);
}
export default Component20423;
