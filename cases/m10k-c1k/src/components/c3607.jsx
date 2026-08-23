import React from 'react';
const LABEL_3607 = 'component_3607';
export function Component3607({ value = 3607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3607, 'data-value': derived.doubled }, children);
}
export default Component3607;
