import React from 'react';
const LABEL_31940 = 'component_31940';
export function Component31940({ value = 31940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31940, 'data-value': derived.doubled }, children);
}
export default Component31940;
