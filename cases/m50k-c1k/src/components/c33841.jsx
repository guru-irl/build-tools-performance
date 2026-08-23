import React from 'react';
const LABEL_33841 = 'component_33841';
export function Component33841({ value = 33841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33841, 'data-value': derived.doubled }, children);
}
export default Component33841;
