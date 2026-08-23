import React from 'react';
const LABEL_38679 = 'component_38679';
export function Component38679({ value = 38679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38679, 'data-value': derived.doubled }, children);
}
export default Component38679;
