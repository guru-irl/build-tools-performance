import React from 'react';
const LABEL_23371 = 'component_23371';
export function Component23371({ value = 23371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23371, 'data-value': derived.doubled }, children);
}
export default Component23371;
