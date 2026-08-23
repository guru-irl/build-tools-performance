import React from 'react';
const LABEL_20948 = 'component_20948';
export function Component20948({ value = 20948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20948, 'data-value': derived.doubled }, children);
}
export default Component20948;
