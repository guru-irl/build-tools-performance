import React from 'react';
const LABEL_1679 = 'component_1679';
export function Component1679({ value = 1679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1679, 'data-value': derived.doubled }, children);
}
export default Component1679;
