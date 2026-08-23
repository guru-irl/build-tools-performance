import React from 'react';
const LABEL_21365 = 'component_21365';
export function Component21365({ value = 21365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21365, 'data-value': derived.doubled }, children);
}
export default Component21365;
