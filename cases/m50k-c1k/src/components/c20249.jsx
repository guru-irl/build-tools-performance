import React from 'react';
const LABEL_20249 = 'component_20249';
export function Component20249({ value = 20249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20249, 'data-value': derived.doubled }, children);
}
export default Component20249;
