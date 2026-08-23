import React from 'react';
const LABEL_3376 = 'component_3376';
export function Component3376({ value = 3376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3376, 'data-value': derived.doubled }, children);
}
export default Component3376;
