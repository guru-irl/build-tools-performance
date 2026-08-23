import React from 'react';
const LABEL_7484 = 'component_7484';
export function Component7484({ value = 7484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7484, 'data-value': derived.doubled }, children);
}
export default Component7484;
