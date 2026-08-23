import React from 'react';
const LABEL_23836 = 'component_23836';
export function Component23836({ value = 23836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23836, 'data-value': derived.doubled }, children);
}
export default Component23836;
