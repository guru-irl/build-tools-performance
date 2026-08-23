import React from 'react';
const LABEL_15841 = 'component_15841';
export function Component15841({ value = 15841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15841, 'data-value': derived.doubled }, children);
}
export default Component15841;
