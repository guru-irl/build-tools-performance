import React from 'react';
const LABEL_22546 = 'component_22546';
export function Component22546({ value = 22546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22546, 'data-value': derived.doubled }, children);
}
export default Component22546;
