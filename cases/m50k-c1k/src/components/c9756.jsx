import React from 'react';
const LABEL_9756 = 'component_9756';
export function Component9756({ value = 9756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9756, 'data-value': derived.doubled }, children);
}
export default Component9756;
