import React from 'react';
const LABEL_30607 = 'component_30607';
export function Component30607({ value = 30607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30607, 'data-value': derived.doubled }, children);
}
export default Component30607;
