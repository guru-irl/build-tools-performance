import React from 'react';
const LABEL_33891 = 'component_33891';
export function Component33891({ value = 33891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33891, 'data-value': derived.doubled }, children);
}
export default Component33891;
