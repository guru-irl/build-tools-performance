import React from 'react';
const LABEL_12607 = 'component_12607';
export function Component12607({ value = 12607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12607, 'data-value': derived.doubled }, children);
}
export default Component12607;
