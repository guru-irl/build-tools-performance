import React from 'react';
const LABEL_13467 = 'component_13467';
export function Component13467({ value = 13467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13467, 'data-value': derived.doubled }, children);
}
export default Component13467;
