import React from 'react';
const LABEL_32150 = 'component_32150';
export function Component32150({ value = 32150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32150, 'data-value': derived.doubled }, children);
}
export default Component32150;
