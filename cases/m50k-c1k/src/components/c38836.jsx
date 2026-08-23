import React from 'react';
const LABEL_38836 = 'component_38836';
export function Component38836({ value = 38836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38836, 'data-value': derived.doubled }, children);
}
export default Component38836;
