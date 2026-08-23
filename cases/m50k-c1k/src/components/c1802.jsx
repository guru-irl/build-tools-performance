import React from 'react';
const LABEL_1802 = 'component_1802';
export function Component1802({ value = 1802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1802, 'data-value': derived.doubled }, children);
}
export default Component1802;
