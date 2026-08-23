import React from 'react';
const LABEL_23562 = 'component_23562';
export function Component23562({ value = 23562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23562, 'data-value': derived.doubled }, children);
}
export default Component23562;
