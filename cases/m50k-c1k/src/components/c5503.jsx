import React from 'react';
const LABEL_5503 = 'component_5503';
export function Component5503({ value = 5503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5503, 'data-value': derived.doubled }, children);
}
export default Component5503;
