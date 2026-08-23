import React from 'react';
const LABEL_22039 = 'component_22039';
export function Component22039({ value = 22039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22039, 'data-value': derived.doubled }, children);
}
export default Component22039;
