import React from 'react';
const LABEL_10836 = 'component_10836';
export function Component10836({ value = 10836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10836, 'data-value': derived.doubled }, children);
}
export default Component10836;
