import React from 'react';
const LABEL_36467 = 'component_36467';
export function Component36467({ value = 36467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36467, 'data-value': derived.doubled }, children);
}
export default Component36467;
