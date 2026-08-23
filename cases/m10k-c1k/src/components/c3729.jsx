import React from 'react';
const LABEL_3729 = 'component_3729';
export function Component3729({ value = 3729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3729, 'data-value': derived.doubled }, children);
}
export default Component3729;
