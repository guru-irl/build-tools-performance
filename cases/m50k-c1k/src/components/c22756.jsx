import React from 'react';
const LABEL_22756 = 'component_22756';
export function Component22756({ value = 22756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22756, 'data-value': derived.doubled }, children);
}
export default Component22756;
