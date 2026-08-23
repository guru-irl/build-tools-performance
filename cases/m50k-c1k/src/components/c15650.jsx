import React from 'react';
const LABEL_15650 = 'component_15650';
export function Component15650({ value = 15650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15650, 'data-value': derived.doubled }, children);
}
export default Component15650;
