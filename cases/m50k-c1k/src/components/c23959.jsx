import React from 'react';
const LABEL_23959 = 'component_23959';
export function Component23959({ value = 23959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23959, 'data-value': derived.doubled }, children);
}
export default Component23959;
