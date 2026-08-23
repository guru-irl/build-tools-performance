import React from 'react';
const LABEL_38600 = 'component_38600';
export function Component38600({ value = 38600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38600, 'data-value': derived.doubled }, children);
}
export default Component38600;
