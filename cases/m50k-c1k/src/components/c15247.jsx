import React from 'react';
const LABEL_15247 = 'component_15247';
export function Component15247({ value = 15247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15247, 'data-value': derived.doubled }, children);
}
export default Component15247;
