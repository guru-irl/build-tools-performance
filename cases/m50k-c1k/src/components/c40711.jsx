import React from 'react';
const LABEL_40711 = 'component_40711';
export function Component40711({ value = 40711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40711, 'data-value': derived.doubled }, children);
}
export default Component40711;
