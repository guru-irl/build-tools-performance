import React from 'react';
const LABEL_32315 = 'component_32315';
export function Component32315({ value = 32315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32315, 'data-value': derived.doubled }, children);
}
export default Component32315;
