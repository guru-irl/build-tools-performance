import React from 'react';
const LABEL_44607 = 'component_44607';
export function Component44607({ value = 44607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44607, 'data-value': derived.doubled }, children);
}
export default Component44607;
