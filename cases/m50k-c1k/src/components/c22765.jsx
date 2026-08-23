import React from 'react';
const LABEL_22765 = 'component_22765';
export function Component22765({ value = 22765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22765, 'data-value': derived.doubled }, children);
}
export default Component22765;
