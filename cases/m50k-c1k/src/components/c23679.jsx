import React from 'react';
const LABEL_23679 = 'component_23679';
export function Component23679({ value = 23679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23679, 'data-value': derived.doubled }, children);
}
export default Component23679;
