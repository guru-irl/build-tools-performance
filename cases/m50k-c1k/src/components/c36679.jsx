import React from 'react';
const LABEL_36679 = 'component_36679';
export function Component36679({ value = 36679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36679, 'data-value': derived.doubled }, children);
}
export default Component36679;
