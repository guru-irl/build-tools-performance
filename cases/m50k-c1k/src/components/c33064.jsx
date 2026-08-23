import React from 'react';
const LABEL_33064 = 'component_33064';
export function Component33064({ value = 33064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33064, 'data-value': derived.doubled }, children);
}
export default Component33064;
