import React from 'react';
const LABEL_30467 = 'component_30467';
export function Component30467({ value = 30467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30467, 'data-value': derived.doubled }, children);
}
export default Component30467;
