import React from 'react';
const LABEL_1376 = 'component_1376';
export function Component1376({ value = 1376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1376, 'data-value': derived.doubled }, children);
}
export default Component1376;
