import React from 'react';
const LABEL_35653 = 'component_35653';
export function Component35653({ value = 35653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35653, 'data-value': derived.doubled }, children);
}
export default Component35653;
