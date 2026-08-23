import React from 'react';
const LABEL_15106 = 'component_15106';
export function Component15106({ value = 15106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15106, 'data-value': derived.doubled }, children);
}
export default Component15106;
