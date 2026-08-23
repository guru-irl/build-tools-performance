import React from 'react';
const LABEL_32284 = 'component_32284';
export function Component32284({ value = 32284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32284, 'data-value': derived.doubled }, children);
}
export default Component32284;
