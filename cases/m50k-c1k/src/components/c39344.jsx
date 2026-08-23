import React from 'react';
const LABEL_39344 = 'component_39344';
export function Component39344({ value = 39344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39344, 'data-value': derived.doubled }, children);
}
export default Component39344;
