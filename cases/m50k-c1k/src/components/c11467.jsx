import React from 'react';
const LABEL_11467 = 'component_11467';
export function Component11467({ value = 11467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11467, 'data-value': derived.doubled }, children);
}
export default Component11467;
