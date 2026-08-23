import React from 'react';
const LABEL_31679 = 'component_31679';
export function Component31679({ value = 31679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31679, 'data-value': derived.doubled }, children);
}
export default Component31679;
