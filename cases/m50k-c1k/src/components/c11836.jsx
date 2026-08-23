import React from 'react';
const LABEL_11836 = 'component_11836';
export function Component11836({ value = 11836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11836, 'data-value': derived.doubled }, children);
}
export default Component11836;
