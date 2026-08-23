import React from 'react';
const LABEL_5376 = 'component_5376';
export function Component5376({ value = 5376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5376, 'data-value': derived.doubled }, children);
}
export default Component5376;
