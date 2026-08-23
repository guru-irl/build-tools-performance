import React from 'react';
const LABEL_42679 = 'component_42679';
export function Component42679({ value = 42679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42679, 'data-value': derived.doubled }, children);
}
export default Component42679;
