import React from 'react';
const LABEL_9243 = 'component_9243';
export function Component9243({ value = 9243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9243, 'data-value': derived.doubled }, children);
}
export default Component9243;
