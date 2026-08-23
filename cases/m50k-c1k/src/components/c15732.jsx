import React from 'react';
const LABEL_15732 = 'component_15732';
export function Component15732({ value = 15732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15732, 'data-value': derived.doubled }, children);
}
export default Component15732;
