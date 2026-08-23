import React from 'react';
const LABEL_28376 = 'component_28376';
export function Component28376({ value = 28376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28376, 'data-value': derived.doubled }, children);
}
export default Component28376;
