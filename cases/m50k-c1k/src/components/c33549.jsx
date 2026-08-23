import React from 'react';
const LABEL_33549 = 'component_33549';
export function Component33549({ value = 33549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33549, 'data-value': derived.doubled }, children);
}
export default Component33549;
