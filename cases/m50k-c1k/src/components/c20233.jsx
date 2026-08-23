import React from 'react';
const LABEL_20233 = 'component_20233';
export function Component20233({ value = 20233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20233, 'data-value': derived.doubled }, children);
}
export default Component20233;
