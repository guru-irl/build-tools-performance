import React from 'react';
const LABEL_6836 = 'component_6836';
export function Component6836({ value = 6836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6836, 'data-value': derived.doubled }, children);
}
export default Component6836;
