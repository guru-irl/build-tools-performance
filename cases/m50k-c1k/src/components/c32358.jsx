import React from 'react';
const LABEL_32358 = 'component_32358';
export function Component32358({ value = 32358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32358, 'data-value': derived.doubled }, children);
}
export default Component32358;
