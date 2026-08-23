import React from 'react';
const LABEL_25237 = 'component_25237';
export function Component25237({ value = 25237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25237, 'data-value': derived.doubled }, children);
}
export default Component25237;
