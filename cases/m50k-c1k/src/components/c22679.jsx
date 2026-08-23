import React from 'react';
const LABEL_22679 = 'component_22679';
export function Component22679({ value = 22679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22679, 'data-value': derived.doubled }, children);
}
export default Component22679;
