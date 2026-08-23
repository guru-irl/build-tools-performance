import React from 'react';
const LABEL_38711 = 'component_38711';
export function Component38711({ value = 38711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38711, 'data-value': derived.doubled }, children);
}
export default Component38711;
