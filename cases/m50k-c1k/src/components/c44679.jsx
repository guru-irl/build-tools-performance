import React from 'react';
const LABEL_44679 = 'component_44679';
export function Component44679({ value = 44679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44679, 'data-value': derived.doubled }, children);
}
export default Component44679;
