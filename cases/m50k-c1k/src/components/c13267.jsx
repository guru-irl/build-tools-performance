import React from 'react';
const LABEL_13267 = 'component_13267';
export function Component13267({ value = 13267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13267, 'data-value': derived.doubled }, children);
}
export default Component13267;
