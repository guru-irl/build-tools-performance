import React from 'react';
const LABEL_32027 = 'component_32027';
export function Component32027({ value = 32027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32027, 'data-value': derived.doubled }, children);
}
export default Component32027;
