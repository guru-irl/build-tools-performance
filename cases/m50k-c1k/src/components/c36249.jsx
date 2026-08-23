import React from 'react';
const LABEL_36249 = 'component_36249';
export function Component36249({ value = 36249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36249, 'data-value': derived.doubled }, children);
}
export default Component36249;
