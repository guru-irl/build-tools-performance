import React from 'react';
const LABEL_10413 = 'component_10413';
export function Component10413({ value = 10413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10413, 'data-value': derived.doubled }, children);
}
export default Component10413;
