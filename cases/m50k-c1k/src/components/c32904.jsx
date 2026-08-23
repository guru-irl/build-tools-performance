import React from 'react';
const LABEL_32904 = 'component_32904';
export function Component32904({ value = 32904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32904, 'data-value': derived.doubled }, children);
}
export default Component32904;
