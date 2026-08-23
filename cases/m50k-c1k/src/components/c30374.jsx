import React from 'react';
const LABEL_30374 = 'component_30374';
export function Component30374({ value = 30374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30374, 'data-value': derived.doubled }, children);
}
export default Component30374;
