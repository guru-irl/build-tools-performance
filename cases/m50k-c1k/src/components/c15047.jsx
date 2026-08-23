import React from 'react';
const LABEL_15047 = 'component_15047';
export function Component15047({ value = 15047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15047, 'data-value': derived.doubled }, children);
}
export default Component15047;
