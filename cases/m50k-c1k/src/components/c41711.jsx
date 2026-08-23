import React from 'react';
const LABEL_41711 = 'component_41711';
export function Component41711({ value = 41711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41711, 'data-value': derived.doubled }, children);
}
export default Component41711;
