import React from 'react';
const LABEL_3473 = 'component_3473';
export function Component3473({ value = 3473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3473, 'data-value': derived.doubled }, children);
}
export default Component3473;
