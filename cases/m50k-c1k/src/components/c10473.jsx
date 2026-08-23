import React from 'react';
const LABEL_10473 = 'component_10473';
export function Component10473({ value = 10473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10473, 'data-value': derived.doubled }, children);
}
export default Component10473;
