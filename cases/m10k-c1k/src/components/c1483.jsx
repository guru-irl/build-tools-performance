import React from 'react';
const LABEL_1483 = 'component_1483';
export function Component1483({ value = 1483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1483, 'data-value': derived.doubled }, children);
}
export default Component1483;
