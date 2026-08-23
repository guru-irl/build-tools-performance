import React from 'react';
const LABEL_32084 = 'component_32084';
export function Component32084({ value = 32084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32084, 'data-value': derived.doubled }, children);
}
export default Component32084;
