import React from 'react';
const LABEL_13959 = 'component_13959';
export function Component13959({ value = 13959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13959, 'data-value': derived.doubled }, children);
}
export default Component13959;
