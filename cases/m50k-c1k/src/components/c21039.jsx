import React from 'react';
const LABEL_21039 = 'component_21039';
export function Component21039({ value = 21039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21039, 'data-value': derived.doubled }, children);
}
export default Component21039;
