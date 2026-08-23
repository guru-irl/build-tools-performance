import React from 'react';
const LABEL_30641 = 'component_30641';
export function Component30641({ value = 30641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30641, 'data-value': derived.doubled }, children);
}
export default Component30641;
