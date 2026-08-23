import React from 'react';
const LABEL_25711 = 'component_25711';
export function Component25711({ value = 25711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25711, 'data-value': derived.doubled }, children);
}
export default Component25711;
