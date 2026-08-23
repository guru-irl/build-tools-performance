import React from 'react';
const LABEL_33657 = 'component_33657';
export function Component33657({ value = 33657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33657, 'data-value': derived.doubled }, children);
}
export default Component33657;
