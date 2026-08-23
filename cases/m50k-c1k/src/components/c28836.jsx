import React from 'react';
const LABEL_28836 = 'component_28836';
export function Component28836({ value = 28836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28836, 'data-value': derived.doubled }, children);
}
export default Component28836;
