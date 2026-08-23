import React from 'react';
const LABEL_27092 = 'component_27092';
export function Component27092({ value = 27092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27092, 'data-value': derived.doubled }, children);
}
export default Component27092;
