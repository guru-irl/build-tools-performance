import React from 'react';
const LABEL_38149 = 'component_38149';
export function Component38149({ value = 38149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38149, 'data-value': derived.doubled }, children);
}
export default Component38149;
