import React from 'react';
const LABEL_17836 = 'component_17836';
export function Component17836({ value = 17836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17836, 'data-value': derived.doubled }, children);
}
export default Component17836;
