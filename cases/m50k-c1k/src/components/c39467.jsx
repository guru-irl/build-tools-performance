import React from 'react';
const LABEL_39467 = 'component_39467';
export function Component39467({ value = 39467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39467, 'data-value': derived.doubled }, children);
}
export default Component39467;
