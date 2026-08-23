import React from 'react';
const LABEL_26711 = 'component_26711';
export function Component26711({ value = 26711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26711, 'data-value': derived.doubled }, children);
}
export default Component26711;
