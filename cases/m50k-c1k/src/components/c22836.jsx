import React from 'react';
const LABEL_22836 = 'component_22836';
export function Component22836({ value = 22836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22836, 'data-value': derived.doubled }, children);
}
export default Component22836;
