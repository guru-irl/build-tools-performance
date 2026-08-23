import React from 'react';
const LABEL_30667 = 'component_30667';
export function Component30667({ value = 30667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30667, 'data-value': derived.doubled }, children);
}
export default Component30667;
