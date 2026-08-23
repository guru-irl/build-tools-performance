import React from 'react';
const LABEL_38607 = 'component_38607';
export function Component38607({ value = 38607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38607, 'data-value': derived.doubled }, children);
}
export default Component38607;
