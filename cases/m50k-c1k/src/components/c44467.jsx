import React from 'react';
const LABEL_44467 = 'component_44467';
export function Component44467({ value = 44467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44467, 'data-value': derived.doubled }, children);
}
export default Component44467;
