import React from 'react';
const LABEL_38756 = 'component_38756';
export function Component38756({ value = 38756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38756, 'data-value': derived.doubled }, children);
}
export default Component38756;
