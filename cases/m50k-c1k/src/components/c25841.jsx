import React from 'react';
const LABEL_25841 = 'component_25841';
export function Component25841({ value = 25841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25841, 'data-value': derived.doubled }, children);
}
export default Component25841;
