import React from 'react';
const LABEL_38841 = 'component_38841';
export function Component38841({ value = 38841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38841, 'data-value': derived.doubled }, children);
}
export default Component38841;
