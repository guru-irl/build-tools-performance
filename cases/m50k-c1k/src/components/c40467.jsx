import React from 'react';
const LABEL_40467 = 'component_40467';
export function Component40467({ value = 40467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40467, 'data-value': derived.doubled }, children);
}
export default Component40467;
