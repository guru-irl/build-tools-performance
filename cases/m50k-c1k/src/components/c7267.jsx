import React from 'react';
const LABEL_7267 = 'component_7267';
export function Component7267({ value = 7267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7267, 'data-value': derived.doubled }, children);
}
export default Component7267;
