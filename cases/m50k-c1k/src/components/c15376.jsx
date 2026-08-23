import React from 'react';
const LABEL_15376 = 'component_15376';
export function Component15376({ value = 15376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15376, 'data-value': derived.doubled }, children);
}
export default Component15376;
