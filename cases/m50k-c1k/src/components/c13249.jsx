import React from 'react';
const LABEL_13249 = 'component_13249';
export function Component13249({ value = 13249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13249, 'data-value': derived.doubled }, children);
}
export default Component13249;
