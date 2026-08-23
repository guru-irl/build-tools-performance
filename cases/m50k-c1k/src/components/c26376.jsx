import React from 'react';
const LABEL_26376 = 'component_26376';
export function Component26376({ value = 26376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26376, 'data-value': derived.doubled }, children);
}
export default Component26376;
