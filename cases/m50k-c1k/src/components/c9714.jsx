import React from 'react';
const LABEL_9714 = 'component_9714';
export function Component9714({ value = 9714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9714, 'data-value': derived.doubled }, children);
}
export default Component9714;
