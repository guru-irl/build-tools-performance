import React from 'react';
const LABEL_1711 = 'component_1711';
export function Component1711({ value = 1711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1711, 'data-value': derived.doubled }, children);
}
export default Component1711;
