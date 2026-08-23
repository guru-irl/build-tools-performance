import React from 'react';
const LABEL_28148 = 'component_28148';
export function Component28148({ value = 28148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28148, 'data-value': derived.doubled }, children);
}
export default Component28148;
