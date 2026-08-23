import React from 'react';
const LABEL_22467 = 'component_22467';
export function Component22467({ value = 22467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22467, 'data-value': derived.doubled }, children);
}
export default Component22467;
