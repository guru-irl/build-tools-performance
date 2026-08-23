import React from 'react';
const LABEL_9062 = 'component_9062';
export function Component9062({ value = 9062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9062, 'data-value': derived.doubled }, children);
}
export default Component9062;
