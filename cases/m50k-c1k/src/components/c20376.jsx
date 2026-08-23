import React from 'react';
const LABEL_20376 = 'component_20376';
export function Component20376({ value = 20376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20376, 'data-value': derived.doubled }, children);
}
export default Component20376;
