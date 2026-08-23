import React from 'react';
const LABEL_35467 = 'component_35467';
export function Component35467({ value = 35467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35467, 'data-value': derived.doubled }, children);
}
export default Component35467;
