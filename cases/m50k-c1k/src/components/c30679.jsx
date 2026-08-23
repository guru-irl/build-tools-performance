import React from 'react';
const LABEL_30679 = 'component_30679';
export function Component30679({ value = 30679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30679, 'data-value': derived.doubled }, children);
}
export default Component30679;
