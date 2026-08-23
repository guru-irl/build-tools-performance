import React from 'react';
const LABEL_31807 = 'component_31807';
export function Component31807({ value = 31807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31807, 'data-value': derived.doubled }, children);
}
export default Component31807;
