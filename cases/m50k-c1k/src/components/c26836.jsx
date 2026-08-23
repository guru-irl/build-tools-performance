import React from 'react';
const LABEL_26836 = 'component_26836';
export function Component26836({ value = 26836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26836, 'data-value': derived.doubled }, children);
}
export default Component26836;
