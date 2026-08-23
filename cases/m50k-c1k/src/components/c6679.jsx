import React from 'react';
const LABEL_6679 = 'component_6679';
export function Component6679({ value = 6679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6679, 'data-value': derived.doubled }, children);
}
export default Component6679;
