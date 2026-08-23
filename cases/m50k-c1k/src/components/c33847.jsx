import React from 'react';
const LABEL_33847 = 'component_33847';
export function Component33847({ value = 33847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33847, 'data-value': derived.doubled }, children);
}
export default Component33847;
