import React from 'react';
const LABEL_12186 = 'component_12186';
export function Component12186({ value = 12186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12186, 'data-value': derived.doubled }, children);
}
export default Component12186;
