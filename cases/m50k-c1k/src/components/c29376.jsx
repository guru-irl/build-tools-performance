import React from 'react';
const LABEL_29376 = 'component_29376';
export function Component29376({ value = 29376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29376, 'data-value': derived.doubled }, children);
}
export default Component29376;
