import React from 'react';
const LABEL_12473 = 'component_12473';
export function Component12473({ value = 12473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12473, 'data-value': derived.doubled }, children);
}
export default Component12473;
