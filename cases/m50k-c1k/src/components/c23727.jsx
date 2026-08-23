import React from 'react';
const LABEL_23727 = 'component_23727';
export function Component23727({ value = 23727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23727, 'data-value': derived.doubled }, children);
}
export default Component23727;
