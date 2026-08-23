import React from 'react';
const LABEL_3679 = 'component_3679';
export function Component3679({ value = 3679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3679, 'data-value': derived.doubled }, children);
}
export default Component3679;
