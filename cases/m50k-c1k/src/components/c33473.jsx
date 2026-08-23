import React from 'react';
const LABEL_33473 = 'component_33473';
export function Component33473({ value = 33473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33473, 'data-value': derived.doubled }, children);
}
export default Component33473;
