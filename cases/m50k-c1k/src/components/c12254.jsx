import React from 'react';
const LABEL_12254 = 'component_12254';
export function Component12254({ value = 12254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12254, 'data-value': derived.doubled }, children);
}
export default Component12254;
