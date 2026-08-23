import React from 'react';
const LABEL_22137 = 'component_22137';
export function Component22137({ value = 22137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22137, 'data-value': derived.doubled }, children);
}
export default Component22137;
