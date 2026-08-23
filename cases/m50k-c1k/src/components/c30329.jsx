import React from 'react';
const LABEL_30329 = 'component_30329';
export function Component30329({ value = 30329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30329, 'data-value': derived.doubled }, children);
}
export default Component30329;
