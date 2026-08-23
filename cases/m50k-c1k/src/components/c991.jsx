import React from 'react';
const LABEL_991 = 'component_991';
export function Component991({ value = 991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_991, 'data-value': derived.doubled }, children);
}
export default Component991;
