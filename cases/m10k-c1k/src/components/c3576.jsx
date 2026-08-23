import React from 'react';
const LABEL_3576 = 'component_3576';
export function Component3576({ value = 3576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3576, 'data-value': derived.doubled }, children);
}
export default Component3576;
