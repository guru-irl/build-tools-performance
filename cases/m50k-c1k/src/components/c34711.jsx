import React from 'react';
const LABEL_34711 = 'component_34711';
export function Component34711({ value = 34711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34711, 'data-value': derived.doubled }, children);
}
export default Component34711;
