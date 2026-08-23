import React from 'react';
const LABEL_38552 = 'component_38552';
export function Component38552({ value = 38552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38552, 'data-value': derived.doubled }, children);
}
export default Component38552;
