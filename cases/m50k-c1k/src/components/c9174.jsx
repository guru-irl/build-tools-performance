import React from 'react';
const LABEL_9174 = 'component_9174';
export function Component9174({ value = 9174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9174, 'data-value': derived.doubled }, children);
}
export default Component9174;
