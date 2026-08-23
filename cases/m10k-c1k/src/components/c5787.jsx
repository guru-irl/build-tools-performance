import React from 'react';
const LABEL_5787 = 'component_5787';
export function Component5787({ value = 5787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5787, 'data-value': derived.doubled }, children);
}
export default Component5787;
