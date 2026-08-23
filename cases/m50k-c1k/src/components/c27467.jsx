import React from 'react';
const LABEL_27467 = 'component_27467';
export function Component27467({ value = 27467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27467, 'data-value': derived.doubled }, children);
}
export default Component27467;
