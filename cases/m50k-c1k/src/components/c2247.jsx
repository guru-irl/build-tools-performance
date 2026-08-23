import React from 'react';
const LABEL_2247 = 'component_2247';
export function Component2247({ value = 2247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2247, 'data-value': derived.doubled }, children);
}
export default Component2247;
