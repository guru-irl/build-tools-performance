import React from 'react';
const LABEL_46711 = 'component_46711';
export function Component46711({ value = 46711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46711, 'data-value': derived.doubled }, children);
}
export default Component46711;
