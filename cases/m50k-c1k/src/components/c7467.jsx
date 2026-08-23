import React from 'react';
const LABEL_7467 = 'component_7467';
export function Component7467({ value = 7467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7467, 'data-value': derived.doubled }, children);
}
export default Component7467;
