import React from 'react';
const LABEL_10679 = 'component_10679';
export function Component10679({ value = 10679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10679, 'data-value': derived.doubled }, children);
}
export default Component10679;
