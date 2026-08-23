import React from 'react';
const LABEL_28249 = 'component_28249';
export function Component28249({ value = 28249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28249, 'data-value': derived.doubled }, children);
}
export default Component28249;
