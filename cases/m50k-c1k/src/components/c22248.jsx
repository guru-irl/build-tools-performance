import React from 'react';
const LABEL_22248 = 'component_22248';
export function Component22248({ value = 22248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22248, 'data-value': derived.doubled }, children);
}
export default Component22248;
