import React from 'react';
const LABEL_9193 = 'component_9193';
export function Component9193({ value = 9193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9193, 'data-value': derived.doubled }, children);
}
export default Component9193;
