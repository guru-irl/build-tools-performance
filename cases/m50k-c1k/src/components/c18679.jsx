import React from 'react';
const LABEL_18679 = 'component_18679';
export function Component18679({ value = 18679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18679, 'data-value': derived.doubled }, children);
}
export default Component18679;
