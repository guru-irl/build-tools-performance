import React from 'react';
const LABEL_33679 = 'component_33679';
export function Component33679({ value = 33679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33679, 'data-value': derived.doubled }, children);
}
export default Component33679;
