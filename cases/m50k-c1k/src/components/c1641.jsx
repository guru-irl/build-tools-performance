import React from 'react';
const LABEL_1641 = 'component_1641';
export function Component1641({ value = 1641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1641, 'data-value': derived.doubled }, children);
}
export default Component1641;
