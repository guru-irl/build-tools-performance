import React from 'react';
const LABEL_23849 = 'component_23849';
export function Component23849({ value = 23849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23849, 'data-value': derived.doubled }, children);
}
export default Component23849;
