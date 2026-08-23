import React from 'react';
const LABEL_10047 = 'component_10047';
export function Component10047({ value = 10047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10047, 'data-value': derived.doubled }, children);
}
export default Component10047;
