import React from 'react';
const LABEL_9065 = 'component_9065';
export function Component9065({ value = 9065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9065, 'data-value': derived.doubled }, children);
}
export default Component9065;
