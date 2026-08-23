import React from 'react';
const LABEL_32096 = 'component_32096';
export function Component32096({ value = 32096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32096, 'data-value': derived.doubled }, children);
}
export default Component32096;
