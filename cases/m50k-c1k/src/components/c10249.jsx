import React from 'react';
const LABEL_10249 = 'component_10249';
export function Component10249({ value = 10249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10249, 'data-value': derived.doubled }, children);
}
export default Component10249;
