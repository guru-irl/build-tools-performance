import React from 'react';
const LABEL_21467 = 'component_21467';
export function Component21467({ value = 21467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21467, 'data-value': derived.doubled }, children);
}
export default Component21467;
