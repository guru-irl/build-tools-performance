import React from 'react';
const LABEL_31810 = 'component_31810';
export function Component31810({ value = 31810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31810, 'data-value': derived.doubled }, children);
}
export default Component31810;
