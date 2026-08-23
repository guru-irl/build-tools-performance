import React from 'react';
const LABEL_33836 = 'component_33836';
export function Component33836({ value = 33836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33836, 'data-value': derived.doubled }, children);
}
export default Component33836;
