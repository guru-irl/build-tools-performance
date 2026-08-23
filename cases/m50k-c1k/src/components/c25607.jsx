import React from 'react';
const LABEL_25607 = 'component_25607';
export function Component25607({ value = 25607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25607, 'data-value': derived.doubled }, children);
}
export default Component25607;
