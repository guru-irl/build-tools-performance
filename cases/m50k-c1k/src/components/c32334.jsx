import React from 'react';
const LABEL_32334 = 'component_32334';
export function Component32334({ value = 32334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32334, 'data-value': derived.doubled }, children);
}
export default Component32334;
