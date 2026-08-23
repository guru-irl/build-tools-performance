import React from 'react';
const LABEL_12467 = 'component_12467';
export function Component12467({ value = 12467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12467, 'data-value': derived.doubled }, children);
}
export default Component12467;
