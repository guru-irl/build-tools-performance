import React from 'react';
const LABEL_29467 = 'component_29467';
export function Component29467({ value = 29467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29467, 'data-value': derived.doubled }, children);
}
export default Component29467;
