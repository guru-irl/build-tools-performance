import React from 'react';
const LABEL_28879 = 'component_28879';
export function Component28879({ value = 28879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28879, 'data-value': derived.doubled }, children);
}
export default Component28879;
