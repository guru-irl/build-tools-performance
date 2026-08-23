import React from 'react';
const LABEL_30811 = 'component_30811';
export function Component30811({ value = 30811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30811, 'data-value': derived.doubled }, children);
}
export default Component30811;
