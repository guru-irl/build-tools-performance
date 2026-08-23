import React from 'react';
const LABEL_24467 = 'component_24467';
export function Component24467({ value = 24467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24467, 'data-value': derived.doubled }, children);
}
export default Component24467;
