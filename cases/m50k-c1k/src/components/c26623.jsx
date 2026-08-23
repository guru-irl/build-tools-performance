import React from 'react';
const LABEL_26623 = 'component_26623';
export function Component26623({ value = 26623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26623, 'data-value': derived.doubled }, children);
}
export default Component26623;
