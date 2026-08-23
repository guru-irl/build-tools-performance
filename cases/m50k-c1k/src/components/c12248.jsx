import React from 'react';
const LABEL_12248 = 'component_12248';
export function Component12248({ value = 12248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12248, 'data-value': derived.doubled }, children);
}
export default Component12248;
