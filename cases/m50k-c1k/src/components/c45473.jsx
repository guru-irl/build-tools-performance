import React from 'react';
const LABEL_45473 = 'component_45473';
export function Component45473({ value = 45473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45473, 'data-value': derived.doubled }, children);
}
export default Component45473;
