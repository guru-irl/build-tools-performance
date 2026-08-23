import React from 'react';
const LABEL_7509 = 'component_7509';
export function Component7509({ value = 7509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7509, 'data-value': derived.doubled }, children);
}
export default Component7509;
