import React from 'react';
const LABEL_31389 = 'component_31389';
export function Component31389({ value = 31389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31389, 'data-value': derived.doubled }, children);
}
export default Component31389;
