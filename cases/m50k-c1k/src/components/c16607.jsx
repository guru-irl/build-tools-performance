import React from 'react';
const LABEL_16607 = 'component_16607';
export function Component16607({ value = 16607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16607, 'data-value': derived.doubled }, children);
}
export default Component16607;
