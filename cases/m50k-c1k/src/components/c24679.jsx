import React from 'react';
const LABEL_24679 = 'component_24679';
export function Component24679({ value = 24679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24679, 'data-value': derived.doubled }, children);
}
export default Component24679;
