import React from 'react';
const LABEL_16836 = 'component_16836';
export function Component16836({ value = 16836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16836, 'data-value': derived.doubled }, children);
}
export default Component16836;
