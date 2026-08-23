import React from 'react';
const LABEL_9836 = 'component_9836';
export function Component9836({ value = 9836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9836, 'data-value': derived.doubled }, children);
}
export default Component9836;
