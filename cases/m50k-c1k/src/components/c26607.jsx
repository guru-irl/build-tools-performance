import React from 'react';
const LABEL_26607 = 'component_26607';
export function Component26607({ value = 26607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26607, 'data-value': derived.doubled }, children);
}
export default Component26607;
