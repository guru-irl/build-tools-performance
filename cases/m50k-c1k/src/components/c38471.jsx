import React from 'react';
const LABEL_38471 = 'component_38471';
export function Component38471({ value = 38471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38471, 'data-value': derived.doubled }, children);
}
export default Component38471;
