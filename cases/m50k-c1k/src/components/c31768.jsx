import React from 'react';
const LABEL_31768 = 'component_31768';
export function Component31768({ value = 31768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31768, 'data-value': derived.doubled }, children);
}
export default Component31768;
