import React from 'react';
const LABEL_15050 = 'component_15050';
export function Component15050({ value = 15050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15050, 'data-value': derived.doubled }, children);
}
export default Component15050;
