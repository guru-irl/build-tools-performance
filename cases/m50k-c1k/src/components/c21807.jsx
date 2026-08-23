import React from 'react';
const LABEL_21807 = 'component_21807';
export function Component21807({ value = 21807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21807, 'data-value': derived.doubled }, children);
}
export default Component21807;
