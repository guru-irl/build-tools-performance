import React from 'react';
const LABEL_1175 = 'component_1175';
export function Component1175({ value = 1175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1175, 'data-value': derived.doubled }, children);
}
export default Component1175;
