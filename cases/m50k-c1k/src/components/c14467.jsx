import React from 'react';
const LABEL_14467 = 'component_14467';
export function Component14467({ value = 14467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14467, 'data-value': derived.doubled }, children);
}
export default Component14467;
