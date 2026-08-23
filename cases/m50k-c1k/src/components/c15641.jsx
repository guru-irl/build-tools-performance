import React from 'react';
const LABEL_15641 = 'component_15641';
export function Component15641({ value = 15641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15641, 'data-value': derived.doubled }, children);
}
export default Component15641;
