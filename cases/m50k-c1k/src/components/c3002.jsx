import React from 'react';
const LABEL_3002 = 'component_3002';
export function Component3002({ value = 3002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3002, 'data-value': derived.doubled }, children);
}
export default Component3002;
