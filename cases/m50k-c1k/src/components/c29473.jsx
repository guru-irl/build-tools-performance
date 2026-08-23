import React from 'react';
const LABEL_29473 = 'component_29473';
export function Component29473({ value = 29473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29473, 'data-value': derived.doubled }, children);
}
export default Component29473;
