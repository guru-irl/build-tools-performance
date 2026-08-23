import React from 'react';
const LABEL_17679 = 'component_17679';
export function Component17679({ value = 17679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17679, 'data-value': derived.doubled }, children);
}
export default Component17679;
