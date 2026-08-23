import React from 'react';
const LABEL_18467 = 'component_18467';
export function Component18467({ value = 18467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18467, 'data-value': derived.doubled }, children);
}
export default Component18467;
