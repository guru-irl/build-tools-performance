import React from 'react';
const LABEL_28711 = 'component_28711';
export function Component28711({ value = 28711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28711, 'data-value': derived.doubled }, children);
}
export default Component28711;
