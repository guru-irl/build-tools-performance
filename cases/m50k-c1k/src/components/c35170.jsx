import React from 'react';
const LABEL_35170 = 'component_35170';
export function Component35170({ value = 35170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35170, 'data-value': derived.doubled }, children);
}
export default Component35170;
