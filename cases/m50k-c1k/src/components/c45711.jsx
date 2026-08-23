import React from 'react';
const LABEL_45711 = 'component_45711';
export function Component45711({ value = 45711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45711, 'data-value': derived.doubled }, children);
}
export default Component45711;
