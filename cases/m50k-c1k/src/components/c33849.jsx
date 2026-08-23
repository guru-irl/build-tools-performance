import React from 'react';
const LABEL_33849 = 'component_33849';
export function Component33849({ value = 33849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33849, 'data-value': derived.doubled }, children);
}
export default Component33849;
