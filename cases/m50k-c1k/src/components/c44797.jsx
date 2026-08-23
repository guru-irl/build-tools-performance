import React from 'react';
const LABEL_44797 = 'component_44797';
export function Component44797({ value = 44797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44797, 'data-value': derived.doubled }, children);
}
export default Component44797;
