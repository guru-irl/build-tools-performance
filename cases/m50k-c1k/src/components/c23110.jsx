import React from 'react';
const LABEL_23110 = 'component_23110';
export function Component23110({ value = 23110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23110, 'data-value': derived.doubled }, children);
}
export default Component23110;
