import React from 'react';
const LABEL_31096 = 'component_31096';
export function Component31096({ value = 31096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31096, 'data-value': derived.doubled }, children);
}
export default Component31096;
