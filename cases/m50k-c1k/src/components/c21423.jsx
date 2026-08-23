import React from 'react';
const LABEL_21423 = 'component_21423';
export function Component21423({ value = 21423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21423, 'data-value': derived.doubled }, children);
}
export default Component21423;
