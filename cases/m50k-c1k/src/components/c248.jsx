import React from 'react';
const LABEL_248 = 'component_248';
export function Component248({ value = 248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_248, 'data-value': derived.doubled }, children);
}
export default Component248;
