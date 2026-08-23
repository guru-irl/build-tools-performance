import React from 'react';
const LABEL_39991 = 'component_39991';
export function Component39991({ value = 39991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39991, 'data-value': derived.doubled }, children);
}
export default Component39991;
