import React from 'react';
const LABEL_35509 = 'component_35509';
export function Component35509({ value = 35509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35509, 'data-value': derived.doubled }, children);
}
export default Component35509;
