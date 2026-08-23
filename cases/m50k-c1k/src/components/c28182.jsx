import React from 'react';
const LABEL_28182 = 'component_28182';
export function Component28182({ value = 28182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28182, 'data-value': derived.doubled }, children);
}
export default Component28182;
