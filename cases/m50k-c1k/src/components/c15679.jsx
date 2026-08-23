import React from 'react';
const LABEL_15679 = 'component_15679';
export function Component15679({ value = 15679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15679, 'data-value': derived.doubled }, children);
}
export default Component15679;
