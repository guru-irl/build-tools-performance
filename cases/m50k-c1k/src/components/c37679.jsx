import React from 'react';
const LABEL_37679 = 'component_37679';
export function Component37679({ value = 37679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37679, 'data-value': derived.doubled }, children);
}
export default Component37679;
