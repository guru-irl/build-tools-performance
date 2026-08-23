import React from 'react';
const LABEL_28679 = 'component_28679';
export function Component28679({ value = 28679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28679, 'data-value': derived.doubled }, children);
}
export default Component28679;
