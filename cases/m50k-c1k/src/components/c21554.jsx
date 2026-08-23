import React from 'react';
const LABEL_21554 = 'component_21554';
export function Component21554({ value = 21554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21554, 'data-value': derived.doubled }, children);
}
export default Component21554;
