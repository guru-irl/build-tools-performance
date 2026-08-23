import React from 'react';
const LABEL_39407 = 'component_39407';
export function Component39407({ value = 39407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39407, 'data-value': derived.doubled }, children);
}
export default Component39407;
