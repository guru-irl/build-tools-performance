import React from 'react';
const LABEL_7248 = 'component_7248';
export function Component7248({ value = 7248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7248, 'data-value': derived.doubled }, children);
}
export default Component7248;
