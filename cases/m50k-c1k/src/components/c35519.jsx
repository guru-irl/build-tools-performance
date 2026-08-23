import React from 'react';
const LABEL_35519 = 'component_35519';
export function Component35519({ value = 35519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35519, 'data-value': derived.doubled }, children);
}
export default Component35519;
