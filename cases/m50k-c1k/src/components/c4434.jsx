import React from 'react';
const LABEL_4434 = 'component_4434';
export function Component4434({ value = 4434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4434, 'data-value': derived.doubled }, children);
}
export default Component4434;
