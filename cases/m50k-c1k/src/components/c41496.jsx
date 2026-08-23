import React from 'react';
const LABEL_41496 = 'component_41496';
export function Component41496({ value = 41496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41496, 'data-value': derived.doubled }, children);
}
export default Component41496;
