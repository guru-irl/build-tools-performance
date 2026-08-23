import React from 'react';
const LABEL_31047 = 'component_31047';
export function Component31047({ value = 31047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31047, 'data-value': derived.doubled }, children);
}
export default Component31047;
