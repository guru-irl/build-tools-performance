import React from 'react';
const LABEL_19679 = 'component_19679';
export function Component19679({ value = 19679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19679, 'data-value': derived.doubled }, children);
}
export default Component19679;
