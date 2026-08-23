import React from 'react';
const LABEL_31614 = 'component_31614';
export function Component31614({ value = 31614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31614, 'data-value': derived.doubled }, children);
}
export default Component31614;
