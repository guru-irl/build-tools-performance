import React from 'react';
const LABEL_14679 = 'component_14679';
export function Component14679({ value = 14679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14679, 'data-value': derived.doubled }, children);
}
export default Component14679;
