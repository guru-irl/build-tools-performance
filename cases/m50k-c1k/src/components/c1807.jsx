import React from 'react';
const LABEL_1807 = 'component_1807';
export function Component1807({ value = 1807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1807, 'data-value': derived.doubled }, children);
}
export default Component1807;
