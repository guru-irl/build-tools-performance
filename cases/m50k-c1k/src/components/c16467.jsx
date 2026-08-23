import React from 'react';
const LABEL_16467 = 'component_16467';
export function Component16467({ value = 16467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16467, 'data-value': derived.doubled }, children);
}
export default Component16467;
