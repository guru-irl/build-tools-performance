import React from 'react';
const LABEL_36113 = 'component_36113';
export function Component36113({ value = 36113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36113, 'data-value': derived.doubled }, children);
}
export default Component36113;
