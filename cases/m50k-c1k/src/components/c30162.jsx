import React from 'react';
const LABEL_30162 = 'component_30162';
export function Component30162({ value = 30162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30162, 'data-value': derived.doubled }, children);
}
export default Component30162;
