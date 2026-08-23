import React from 'react';
const LABEL_13711 = 'component_13711';
export function Component13711({ value = 13711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13711, 'data-value': derived.doubled }, children);
}
export default Component13711;
