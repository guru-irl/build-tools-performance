import React from 'react';
const LABEL_3467 = 'component_3467';
export function Component3467({ value = 3467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3467, 'data-value': derived.doubled }, children);
}
export default Component3467;
