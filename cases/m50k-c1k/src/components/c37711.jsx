import React from 'react';
const LABEL_37711 = 'component_37711';
export function Component37711({ value = 37711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37711, 'data-value': derived.doubled }, children);
}
export default Component37711;
