import React from 'react';
const LABEL_32524 = 'component_32524';
export function Component32524({ value = 32524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32524, 'data-value': derived.doubled }, children);
}
export default Component32524;
