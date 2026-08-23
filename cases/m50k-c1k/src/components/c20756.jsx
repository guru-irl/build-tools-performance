import React from 'react';
const LABEL_20756 = 'component_20756';
export function Component20756({ value = 20756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20756, 'data-value': derived.doubled }, children);
}
export default Component20756;
