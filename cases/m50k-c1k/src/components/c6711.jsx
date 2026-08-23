import React from 'react';
const LABEL_6711 = 'component_6711';
export function Component6711({ value = 6711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6711, 'data-value': derived.doubled }, children);
}
export default Component6711;
