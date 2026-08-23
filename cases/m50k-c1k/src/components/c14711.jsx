import React from 'react';
const LABEL_14711 = 'component_14711';
export function Component14711({ value = 14711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14711, 'data-value': derived.doubled }, children);
}
export default Component14711;
