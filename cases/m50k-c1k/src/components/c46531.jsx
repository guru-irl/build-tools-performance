import React from 'react';
const LABEL_46531 = 'component_46531';
export function Component46531({ value = 46531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46531, 'data-value': derived.doubled }, children);
}
export default Component46531;
