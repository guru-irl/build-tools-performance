import React from 'react';
const LABEL_32182 = 'component_32182';
export function Component32182({ value = 32182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32182, 'data-value': derived.doubled }, children);
}
export default Component32182;
