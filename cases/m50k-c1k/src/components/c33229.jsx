import React from 'react';
const LABEL_33229 = 'component_33229';
export function Component33229({ value = 33229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33229, 'data-value': derived.doubled }, children);
}
export default Component33229;
