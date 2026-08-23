import React from 'react';
const LABEL_9841 = 'component_9841';
export function Component9841({ value = 9841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9841, 'data-value': derived.doubled }, children);
}
export default Component9841;
