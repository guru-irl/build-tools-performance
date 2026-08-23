import React from 'react';
const LABEL_23249 = 'component_23249';
export function Component23249({ value = 23249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23249, 'data-value': derived.doubled }, children);
}
export default Component23249;
