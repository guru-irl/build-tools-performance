import React from 'react';
const LABEL_11991 = 'component_11991';
export function Component11991({ value = 11991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11991, 'data-value': derived.doubled }, children);
}
export default Component11991;
