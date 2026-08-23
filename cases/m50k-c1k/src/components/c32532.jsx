import React from 'react';
const LABEL_32532 = 'component_32532';
export function Component32532({ value = 32532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32532, 'data-value': derived.doubled }, children);
}
export default Component32532;
