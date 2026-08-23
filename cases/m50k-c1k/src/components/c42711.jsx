import React from 'react';
const LABEL_42711 = 'component_42711';
export function Component42711({ value = 42711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42711, 'data-value': derived.doubled }, children);
}
export default Component42711;
