import React from 'react';
const LABEL_27483 = 'component_27483';
export function Component27483({ value = 27483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27483, 'data-value': derived.doubled }, children);
}
export default Component27483;
