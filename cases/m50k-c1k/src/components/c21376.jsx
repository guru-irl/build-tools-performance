import React from 'react';
const LABEL_21376 = 'component_21376';
export function Component21376({ value = 21376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21376, 'data-value': derived.doubled }, children);
}
export default Component21376;
