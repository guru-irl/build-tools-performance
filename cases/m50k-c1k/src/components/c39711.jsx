import React from 'react';
const LABEL_39711 = 'component_39711';
export function Component39711({ value = 39711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39711, 'data-value': derived.doubled }, children);
}
export default Component39711;
