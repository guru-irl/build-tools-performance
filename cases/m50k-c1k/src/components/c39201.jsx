import React from 'react';
const LABEL_39201 = 'component_39201';
export function Component39201({ value = 39201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39201, 'data-value': derived.doubled }, children);
}
export default Component39201;
