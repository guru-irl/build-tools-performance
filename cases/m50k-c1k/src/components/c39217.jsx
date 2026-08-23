import React from 'react';
const LABEL_39217 = 'component_39217';
export function Component39217({ value = 39217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39217, 'data-value': derived.doubled }, children);
}
export default Component39217;
