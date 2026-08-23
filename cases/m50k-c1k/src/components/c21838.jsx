import React from 'react';
const LABEL_21838 = 'component_21838';
export function Component21838({ value = 21838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21838, 'data-value': derived.doubled }, children);
}
export default Component21838;
