import React from 'react';
const LABEL_6641 = 'component_6641';
export function Component6641({ value = 6641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6641, 'data-value': derived.doubled }, children);
}
export default Component6641;
