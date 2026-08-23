import React from 'react';
const LABEL_33467 = 'component_33467';
export function Component33467({ value = 33467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33467, 'data-value': derived.doubled }, children);
}
export default Component33467;
