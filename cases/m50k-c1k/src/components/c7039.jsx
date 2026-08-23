import React from 'react';
const LABEL_7039 = 'component_7039';
export function Component7039({ value = 7039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7039, 'data-value': derived.doubled }, children);
}
export default Component7039;
