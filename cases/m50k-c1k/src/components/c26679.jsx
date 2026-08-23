import React from 'react';
const LABEL_26679 = 'component_26679';
export function Component26679({ value = 26679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26679, 'data-value': derived.doubled }, children);
}
export default Component26679;
