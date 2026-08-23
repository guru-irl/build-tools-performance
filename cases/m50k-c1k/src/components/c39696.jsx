import React from 'react';
const LABEL_39696 = 'component_39696';
export function Component39696({ value = 39696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39696, 'data-value': derived.doubled }, children);
}
export default Component39696;
