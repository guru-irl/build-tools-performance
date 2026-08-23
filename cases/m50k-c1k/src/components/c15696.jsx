import React from 'react';
const LABEL_15696 = 'component_15696';
export function Component15696({ value = 15696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15696, 'data-value': derived.doubled }, children);
}
export default Component15696;
