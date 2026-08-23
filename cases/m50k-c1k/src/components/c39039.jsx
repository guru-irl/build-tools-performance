import React from 'react';
const LABEL_39039 = 'component_39039';
export function Component39039({ value = 39039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39039, 'data-value': derived.doubled }, children);
}
export default Component39039;
