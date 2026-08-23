import React from 'react';
const LABEL_33801 = 'component_33801';
export function Component33801({ value = 33801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33801, 'data-value': derived.doubled }, children);
}
export default Component33801;
