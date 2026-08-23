import React from 'react';
const LABEL_2729 = 'component_2729';
export function Component2729({ value = 2729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2729, 'data-value': derived.doubled }, children);
}
export default Component2729;
