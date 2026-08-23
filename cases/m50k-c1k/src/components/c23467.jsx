import React from 'react';
const LABEL_23467 = 'component_23467';
export function Component23467({ value = 23467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23467, 'data-value': derived.doubled }, children);
}
export default Component23467;
