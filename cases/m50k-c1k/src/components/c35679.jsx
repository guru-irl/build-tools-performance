import React from 'react';
const LABEL_35679 = 'component_35679';
export function Component35679({ value = 35679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35679, 'data-value': derived.doubled }, children);
}
export default Component35679;
