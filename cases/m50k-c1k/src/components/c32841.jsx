import React from 'react';
const LABEL_32841 = 'component_32841';
export function Component32841({ value = 32841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32841, 'data-value': derived.doubled }, children);
}
export default Component32841;
