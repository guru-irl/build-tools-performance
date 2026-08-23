import React from 'react';
const LABEL_16953 = 'component_16953';
export function Component16953({ value = 16953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16953, 'data-value': derived.doubled }, children);
}
export default Component16953;
