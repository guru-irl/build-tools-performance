import React from 'react';
const LABEL_6197 = 'component_6197';
export function Component6197({ value = 6197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6197, 'data-value': derived.doubled }, children);
}
export default Component6197;
