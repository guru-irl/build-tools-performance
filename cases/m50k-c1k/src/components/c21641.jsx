import React from 'react';
const LABEL_21641 = 'component_21641';
export function Component21641({ value = 21641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21641, 'data-value': derived.doubled }, children);
}
export default Component21641;
