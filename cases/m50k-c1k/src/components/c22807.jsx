import React from 'react';
const LABEL_22807 = 'component_22807';
export function Component22807({ value = 22807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22807, 'data-value': derived.doubled }, children);
}
export default Component22807;
