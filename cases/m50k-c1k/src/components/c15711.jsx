import React from 'react';
const LABEL_15711 = 'component_15711';
export function Component15711({ value = 15711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15711, 'data-value': derived.doubled }, children);
}
export default Component15711;
