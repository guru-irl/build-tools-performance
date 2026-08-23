import React from 'react';
const LABEL_45679 = 'component_45679';
export function Component45679({ value = 45679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45679, 'data-value': derived.doubled }, children);
}
export default Component45679;
