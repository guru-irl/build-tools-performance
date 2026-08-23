import React from 'react';
const LABEL_27398 = 'component_27398';
export function Component27398({ value = 27398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27398, 'data-value': derived.doubled }, children);
}
export default Component27398;
