import React from 'react';
const LABEL_12163 = 'component_12163';
export function Component12163({ value = 12163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12163, 'data-value': derived.doubled }, children);
}
export default Component12163;
