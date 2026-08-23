import React from 'react';
const LABEL_7376 = 'component_7376';
export function Component7376({ value = 7376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7376, 'data-value': derived.doubled }, children);
}
export default Component7376;
