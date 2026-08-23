import React from 'react';
const LABEL_5650 = 'component_5650';
export function Component5650({ value = 5650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5650, 'data-value': derived.doubled }, children);
}
export default Component5650;
