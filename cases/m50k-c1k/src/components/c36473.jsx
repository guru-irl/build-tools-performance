import React from 'react';
const LABEL_36473 = 'component_36473';
export function Component36473({ value = 36473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36473, 'data-value': derived.doubled }, children);
}
export default Component36473;
