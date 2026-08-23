import React from 'react';
const LABEL_711 = 'component_711';
export function Component711({ value = 711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_711, 'data-value': derived.doubled }, children);
}
export default Component711;
