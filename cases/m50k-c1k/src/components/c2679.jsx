import React from 'react';
const LABEL_2679 = 'component_2679';
export function Component2679({ value = 2679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2679, 'data-value': derived.doubled }, children);
}
export default Component2679;
