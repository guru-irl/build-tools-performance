import React from 'react';
const LABEL_33376 = 'component_33376';
export function Component33376({ value = 33376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33376, 'data-value': derived.doubled }, children);
}
export default Component33376;
