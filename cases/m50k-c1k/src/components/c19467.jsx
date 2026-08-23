import React from 'react';
const LABEL_19467 = 'component_19467';
export function Component19467({ value = 19467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19467, 'data-value': derived.doubled }, children);
}
export default Component19467;
