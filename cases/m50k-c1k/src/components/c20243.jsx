import React from 'react';
const LABEL_20243 = 'component_20243';
export function Component20243({ value = 20243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20243, 'data-value': derived.doubled }, children);
}
export default Component20243;
