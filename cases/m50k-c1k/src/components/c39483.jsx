import React from 'react';
const LABEL_39483 = 'component_39483';
export function Component39483({ value = 39483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39483, 'data-value': derived.doubled }, children);
}
export default Component39483;
