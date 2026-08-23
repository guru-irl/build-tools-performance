import React from 'react';
const LABEL_19711 = 'component_19711';
export function Component19711({ value = 19711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19711, 'data-value': derived.doubled }, children);
}
export default Component19711;
