import React from 'react';
const LABEL_3503 = 'component_3503';
export function Component3503({ value = 3503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3503, 'data-value': derived.doubled }, children);
}
export default Component3503;
