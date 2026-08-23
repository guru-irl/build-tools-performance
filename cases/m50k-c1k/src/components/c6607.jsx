import React from 'react';
const LABEL_6607 = 'component_6607';
export function Component6607({ value = 6607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6607, 'data-value': derived.doubled }, children);
}
export default Component6607;
