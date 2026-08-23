import React from 'react';
const LABEL_23606 = 'component_23606';
export function Component23606({ value = 23606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23606, 'data-value': derived.doubled }, children);
}
export default Component23606;
