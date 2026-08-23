import React from 'react';
const LABEL_23176 = 'component_23176';
export function Component23176({ value = 23176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23176, 'data-value': derived.doubled }, children);
}
export default Component23176;
