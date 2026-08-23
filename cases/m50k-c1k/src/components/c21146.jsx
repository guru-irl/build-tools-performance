import React from 'react';
const LABEL_21146 = 'component_21146';
export function Component21146({ value = 21146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21146, 'data-value': derived.doubled }, children);
}
export default Component21146;
