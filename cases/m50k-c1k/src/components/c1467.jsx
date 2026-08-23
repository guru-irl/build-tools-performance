import React from 'react';
const LABEL_1467 = 'component_1467';
export function Component1467({ value = 1467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1467, 'data-value': derived.doubled }, children);
}
export default Component1467;
