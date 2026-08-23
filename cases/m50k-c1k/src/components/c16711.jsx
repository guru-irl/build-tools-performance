import React from 'react';
const LABEL_16711 = 'component_16711';
export function Component16711({ value = 16711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16711, 'data-value': derived.doubled }, children);
}
export default Component16711;
