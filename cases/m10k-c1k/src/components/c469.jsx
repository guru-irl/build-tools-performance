import React from 'react';
const LABEL_469 = 'component_469';
export function Component469({ value = 469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_469, 'data-value': derived.doubled }, children);
}
export default Component469;
