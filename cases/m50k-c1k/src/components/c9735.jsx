import React from 'react';
const LABEL_9735 = 'component_9735';
export function Component9735({ value = 9735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9735, 'data-value': derived.doubled }, children);
}
export default Component9735;
