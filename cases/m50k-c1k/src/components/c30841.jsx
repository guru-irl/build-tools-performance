import React from 'react';
const LABEL_30841 = 'component_30841';
export function Component30841({ value = 30841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30841, 'data-value': derived.doubled }, children);
}
export default Component30841;
