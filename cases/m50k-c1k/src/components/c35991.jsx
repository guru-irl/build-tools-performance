import React from 'react';
const LABEL_35991 = 'component_35991';
export function Component35991({ value = 35991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35991, 'data-value': derived.doubled }, children);
}
export default Component35991;
