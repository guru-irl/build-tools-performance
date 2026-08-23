import React from 'react';
const LABEL_39607 = 'component_39607';
export function Component39607({ value = 39607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39607, 'data-value': derived.doubled }, children);
}
export default Component39607;
