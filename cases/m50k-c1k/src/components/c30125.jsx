import React from 'react';
const LABEL_30125 = 'component_30125';
export function Component30125({ value = 30125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30125, 'data-value': derived.doubled }, children);
}
export default Component30125;
