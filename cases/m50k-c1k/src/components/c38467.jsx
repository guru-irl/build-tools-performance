import React from 'react';
const LABEL_38467 = 'component_38467';
export function Component38467({ value = 38467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38467, 'data-value': derived.doubled }, children);
}
export default Component38467;
