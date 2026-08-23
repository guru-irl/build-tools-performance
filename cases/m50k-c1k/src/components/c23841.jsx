import React from 'react';
const LABEL_23841 = 'component_23841';
export function Component23841({ value = 23841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23841, 'data-value': derived.doubled }, children);
}
export default Component23841;
