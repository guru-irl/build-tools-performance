import React from 'react';
const LABEL_17841 = 'component_17841';
export function Component17841({ value = 17841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17841, 'data-value': derived.doubled }, children);
}
export default Component17841;
