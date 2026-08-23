import React from 'react';
const LABEL_13650 = 'component_13650';
export function Component13650({ value = 13650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13650, 'data-value': derived.doubled }, children);
}
export default Component13650;
