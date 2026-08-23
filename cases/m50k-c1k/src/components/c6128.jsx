import React from 'react';
const LABEL_6128 = 'component_6128';
export function Component6128({ value = 6128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6128, 'data-value': derived.doubled }, children);
}
export default Component6128;
