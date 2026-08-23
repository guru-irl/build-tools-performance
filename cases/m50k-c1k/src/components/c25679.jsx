import React from 'react';
const LABEL_25679 = 'component_25679';
export function Component25679({ value = 25679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25679, 'data-value': derived.doubled }, children);
}
export default Component25679;
