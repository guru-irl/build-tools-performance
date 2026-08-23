import React from 'react';
const LABEL_21950 = 'component_21950';
export function Component21950({ value = 21950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21950, 'data-value': derived.doubled }, children);
}
export default Component21950;
