import React from 'react';
const LABEL_16148 = 'component_16148';
export function Component16148({ value = 16148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16148, 'data-value': derived.doubled }, children);
}
export default Component16148;
