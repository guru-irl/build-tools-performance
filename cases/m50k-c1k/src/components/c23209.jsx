import React from 'react';
const LABEL_23209 = 'component_23209';
export function Component23209({ value = 23209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23209, 'data-value': derived.doubled }, children);
}
export default Component23209;
