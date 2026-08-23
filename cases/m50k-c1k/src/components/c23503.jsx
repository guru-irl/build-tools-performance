import React from 'react';
const LABEL_23503 = 'component_23503';
export function Component23503({ value = 23503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23503, 'data-value': derived.doubled }, children);
}
export default Component23503;
