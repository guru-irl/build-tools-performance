import React from 'react';
const LABEL_44134 = 'component_44134';
export function Component44134({ value = 44134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44134, 'data-value': derived.doubled }, children);
}
export default Component44134;
