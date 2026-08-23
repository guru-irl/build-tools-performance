import React from 'react';
const LABEL_10345 = 'component_10345';
export function Component10345({ value = 10345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10345, 'data-value': derived.doubled }, children);
}
export default Component10345;
