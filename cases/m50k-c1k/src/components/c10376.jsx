import React from 'react';
const LABEL_10376 = 'component_10376';
export function Component10376({ value = 10376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10376, 'data-value': derived.doubled }, children);
}
export default Component10376;
