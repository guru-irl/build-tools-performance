import React from 'react';
const LABEL_8497 = 'component_8497';
export function Component8497({ value = 8497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8497, 'data-value': derived.doubled }, children);
}
export default Component8497;
