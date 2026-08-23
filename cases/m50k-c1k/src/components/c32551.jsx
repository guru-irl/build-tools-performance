import React from 'react';
const LABEL_32551 = 'component_32551';
export function Component32551({ value = 32551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32551, 'data-value': derived.doubled }, children);
}
export default Component32551;
