import React from 'react';
const LABEL_30711 = 'component_30711';
export function Component30711({ value = 30711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30711, 'data-value': derived.doubled }, children);
}
export default Component30711;
