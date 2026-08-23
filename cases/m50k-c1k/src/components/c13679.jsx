import React from 'react';
const LABEL_13679 = 'component_13679';
export function Component13679({ value = 13679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13679, 'data-value': derived.doubled }, children);
}
export default Component13679;
