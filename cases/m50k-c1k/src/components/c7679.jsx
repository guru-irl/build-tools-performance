import React from 'react';
const LABEL_7679 = 'component_7679';
export function Component7679({ value = 7679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7679, 'data-value': derived.doubled }, children);
}
export default Component7679;
