import React from 'react';
const LABEL_21503 = 'component_21503';
export function Component21503({ value = 21503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21503, 'data-value': derived.doubled }, children);
}
export default Component21503;
