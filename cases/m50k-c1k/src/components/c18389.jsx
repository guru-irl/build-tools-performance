import React from 'react';
const LABEL_18389 = 'component_18389';
export function Component18389({ value = 18389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18389, 'data-value': derived.doubled }, children);
}
export default Component18389;
