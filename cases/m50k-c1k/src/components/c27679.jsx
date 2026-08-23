import React from 'react';
const LABEL_27679 = 'component_27679';
export function Component27679({ value = 27679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27679, 'data-value': derived.doubled }, children);
}
export default Component27679;
