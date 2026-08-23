import React from 'react';
const LABEL_22193 = 'component_22193';
export function Component22193({ value = 22193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22193, 'data-value': derived.doubled }, children);
}
export default Component22193;
