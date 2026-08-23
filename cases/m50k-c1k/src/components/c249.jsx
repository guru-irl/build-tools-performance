import React from 'react';
const LABEL_249 = 'component_249';
export function Component249({ value = 249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_249, 'data-value': derived.doubled }, children);
}
export default Component249;
