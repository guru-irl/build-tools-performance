import React from 'react';
const LABEL_7711 = 'component_7711';
export function Component7711({ value = 7711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7711, 'data-value': derived.doubled }, children);
}
export default Component7711;
