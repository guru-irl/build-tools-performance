import React from 'react';
const LABEL_25467 = 'component_25467';
export function Component25467({ value = 25467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25467, 'data-value': derived.doubled }, children);
}
export default Component25467;
