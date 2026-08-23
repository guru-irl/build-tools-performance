import React from 'react';
const LABEL_24711 = 'component_24711';
export function Component24711({ value = 24711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24711, 'data-value': derived.doubled }, children);
}
export default Component24711;
