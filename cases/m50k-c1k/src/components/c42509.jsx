import React from 'react';
const LABEL_42509 = 'component_42509';
export function Component42509({ value = 42509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42509, 'data-value': derived.doubled }, children);
}
export default Component42509;
