import React from 'react';
const LABEL_12522 = 'component_12522';
export function Component12522({ value = 12522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12522, 'data-value': derived.doubled }, children);
}
export default Component12522;
