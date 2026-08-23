import React from 'react';
const LABEL_11376 = 'component_11376';
export function Component11376({ value = 11376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11376, 'data-value': derived.doubled }, children);
}
export default Component11376;
