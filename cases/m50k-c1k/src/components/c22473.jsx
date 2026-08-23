import React from 'react';
const LABEL_22473 = 'component_22473';
export function Component22473({ value = 22473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22473, 'data-value': derived.doubled }, children);
}
export default Component22473;
