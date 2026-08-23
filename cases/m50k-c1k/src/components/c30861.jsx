import React from 'react';
const LABEL_30861 = 'component_30861';
export function Component30861({ value = 30861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30861, 'data-value': derived.doubled }, children);
}
export default Component30861;
