import React from 'react';
const LABEL_27620 = 'component_27620';
export function Component27620({ value = 27620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27620, 'data-value': derived.doubled }, children);
}
export default Component27620;
