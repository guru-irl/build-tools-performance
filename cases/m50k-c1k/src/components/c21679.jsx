import React from 'react';
const LABEL_21679 = 'component_21679';
export function Component21679({ value = 21679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21679, 'data-value': derived.doubled }, children);
}
export default Component21679;
