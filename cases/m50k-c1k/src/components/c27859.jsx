import React from 'react';
const LABEL_27859 = 'component_27859';
export function Component27859({ value = 27859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27859, 'data-value': derived.doubled }, children);
}
export default Component27859;
