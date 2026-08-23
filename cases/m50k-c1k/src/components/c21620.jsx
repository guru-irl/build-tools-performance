import React from 'react';
const LABEL_21620 = 'component_21620';
export function Component21620({ value = 21620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21620, 'data-value': derived.doubled }, children);
}
export default Component21620;
