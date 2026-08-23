import React from 'react';
const LABEL_39546 = 'component_39546';
export function Component39546({ value = 39546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39546, 'data-value': derived.doubled }, children);
}
export default Component39546;
