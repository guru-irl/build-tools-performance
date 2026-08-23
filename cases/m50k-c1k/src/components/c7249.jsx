import React from 'react';
const LABEL_7249 = 'component_7249';
export function Component7249({ value = 7249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7249, 'data-value': derived.doubled }, children);
}
export default Component7249;
