import React from 'react';
const LABEL_21148 = 'component_21148';
export function Component21148({ value = 21148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21148, 'data-value': derived.doubled }, children);
}
export default Component21148;
