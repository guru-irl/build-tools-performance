import React from 'react';
const LABEL_12679 = 'component_12679';
export function Component12679({ value = 12679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12679, 'data-value': derived.doubled }, children);
}
export default Component12679;
