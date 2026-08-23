import React from 'react';
const LABEL_22989 = 'component_22989';
export function Component22989({ value = 22989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22989, 'data-value': derived.doubled }, children);
}
export default Component22989;
