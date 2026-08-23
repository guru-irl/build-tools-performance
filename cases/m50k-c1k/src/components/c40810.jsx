import React from 'react';
const LABEL_40810 = 'component_40810';
export function Component40810({ value = 40810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40810, 'data-value': derived.doubled }, children);
}
export default Component40810;
