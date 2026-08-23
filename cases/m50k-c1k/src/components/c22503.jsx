import React from 'react';
const LABEL_22503 = 'component_22503';
export function Component22503({ value = 22503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22503, 'data-value': derived.doubled }, children);
}
export default Component22503;
