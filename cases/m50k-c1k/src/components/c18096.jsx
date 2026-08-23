import React from 'react';
const LABEL_18096 = 'component_18096';
export function Component18096({ value = 18096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18096, 'data-value': derived.doubled }, children);
}
export default Component18096;
