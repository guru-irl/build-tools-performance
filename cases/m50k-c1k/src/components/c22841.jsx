import React from 'react';
const LABEL_22841 = 'component_22841';
export function Component22841({ value = 22841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22841, 'data-value': derived.doubled }, children);
}
export default Component22841;
