import React from 'react';
const LABEL_23768 = 'component_23768';
export function Component23768({ value = 23768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23768, 'data-value': derived.doubled }, children);
}
export default Component23768;
