import React from 'react';
const LABEL_21991 = 'component_21991';
export function Component21991({ value = 21991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21991, 'data-value': derived.doubled }, children);
}
export default Component21991;
