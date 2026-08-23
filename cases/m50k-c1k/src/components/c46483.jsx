import React from 'react';
const LABEL_46483 = 'component_46483';
export function Component46483({ value = 46483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46483, 'data-value': derived.doubled }, children);
}
export default Component46483;
