import React from 'react';
const LABEL_10123 = 'component_10123';
export function Component10123({ value = 10123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10123, 'data-value': derived.doubled }, children);
}
export default Component10123;
