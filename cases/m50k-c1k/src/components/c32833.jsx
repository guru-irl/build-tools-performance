import React from 'react';
const LABEL_32833 = 'component_32833';
export function Component32833({ value = 32833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32833, 'data-value': derived.doubled }, children);
}
export default Component32833;
