import React from 'react';
const LABEL_8467 = 'component_8467';
export function Component8467({ value = 8467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8467, 'data-value': derived.doubled }, children);
}
export default Component8467;
