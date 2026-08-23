import React from 'react';
const LABEL_29679 = 'component_29679';
export function Component29679({ value = 29679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29679, 'data-value': derived.doubled }, children);
}
export default Component29679;
