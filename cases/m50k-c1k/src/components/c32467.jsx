import React from 'react';
const LABEL_32467 = 'component_32467';
export function Component32467({ value = 32467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32467, 'data-value': derived.doubled }, children);
}
export default Component32467;
