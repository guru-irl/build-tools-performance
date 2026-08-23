import React from 'react';
const LABEL_1473 = 'component_1473';
export function Component1473({ value = 1473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1473, 'data-value': derived.doubled }, children);
}
export default Component1473;
