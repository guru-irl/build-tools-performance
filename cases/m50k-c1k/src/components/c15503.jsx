import React from 'react';
const LABEL_15503 = 'component_15503';
export function Component15503({ value = 15503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15503, 'data-value': derived.doubled }, children);
}
export default Component15503;
