import React from 'react';
const LABEL_23714 = 'component_23714';
export function Component23714({ value = 23714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23714, 'data-value': derived.doubled }, children);
}
export default Component23714;
