import React from 'react';
const LABEL_32679 = 'component_32679';
export function Component32679({ value = 32679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32679, 'data-value': derived.doubled }, children);
}
export default Component32679;
