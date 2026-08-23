import React from 'react';
const LABEL_45607 = 'component_45607';
export function Component45607({ value = 45607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45607, 'data-value': derived.doubled }, children);
}
export default Component45607;
