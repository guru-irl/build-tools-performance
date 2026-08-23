import React from 'react';
const LABEL_15735 = 'component_15735';
export function Component15735({ value = 15735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15735, 'data-value': derived.doubled }, children);
}
export default Component15735;
