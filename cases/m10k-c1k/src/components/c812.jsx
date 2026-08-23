import React from 'react';
const LABEL_812 = 'component_812';
export function Component812({ value = 812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_812, 'data-value': derived.doubled }, children);
}
export default Component812;
