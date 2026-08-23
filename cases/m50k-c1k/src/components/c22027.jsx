import React from 'react';
const LABEL_22027 = 'component_22027';
export function Component22027({ value = 22027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22027, 'data-value': derived.doubled }, children);
}
export default Component22027;
