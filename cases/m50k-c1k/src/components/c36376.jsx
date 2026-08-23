import React from 'react';
const LABEL_36376 = 'component_36376';
export function Component36376({ value = 36376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36376, 'data-value': derived.doubled }, children);
}
export default Component36376;
