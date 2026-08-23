import React from 'react';
const LABEL_33520 = 'component_33520';
export function Component33520({ value = 33520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33520, 'data-value': derived.doubled }, children);
}
export default Component33520;
