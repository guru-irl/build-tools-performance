import React from 'react';
const LABEL_28804 = 'component_28804';
export function Component28804({ value = 28804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28804, 'data-value': derived.doubled }, children);
}
export default Component28804;
