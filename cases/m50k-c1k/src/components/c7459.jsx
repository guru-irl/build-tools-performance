import React from 'react';
const LABEL_7459 = 'component_7459';
export function Component7459({ value = 7459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7459, 'data-value': derived.doubled }, children);
}
export default Component7459;
