import React from 'react';
const LABEL_21473 = 'component_21473';
export function Component21473({ value = 21473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21473, 'data-value': derived.doubled }, children);
}
export default Component21473;
