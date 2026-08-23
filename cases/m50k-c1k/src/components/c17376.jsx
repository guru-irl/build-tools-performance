import React from 'react';
const LABEL_17376 = 'component_17376';
export function Component17376({ value = 17376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17376, 'data-value': derived.doubled }, children);
}
export default Component17376;
