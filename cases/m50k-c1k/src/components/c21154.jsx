import React from 'react';
const LABEL_21154 = 'component_21154';
export function Component21154({ value = 21154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21154, 'data-value': derived.doubled }, children);
}
export default Component21154;
