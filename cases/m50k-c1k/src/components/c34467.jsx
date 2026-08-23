import React from 'react';
const LABEL_34467 = 'component_34467';
export function Component34467({ value = 34467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34467, 'data-value': derived.doubled }, children);
}
export default Component34467;
