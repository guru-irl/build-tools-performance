import React from 'react';
const LABEL_23471 = 'component_23471';
export function Component23471({ value = 23471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23471, 'data-value': derived.doubled }, children);
}
export default Component23471;
