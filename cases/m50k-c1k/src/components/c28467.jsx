import React from 'react';
const LABEL_28467 = 'component_28467';
export function Component28467({ value = 28467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28467, 'data-value': derived.doubled }, children);
}
export default Component28467;
