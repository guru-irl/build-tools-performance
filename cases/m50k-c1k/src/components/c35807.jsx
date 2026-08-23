import React from 'react';
const LABEL_35807 = 'component_35807';
export function Component35807({ value = 35807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35807, 'data-value': derived.doubled }, children);
}
export default Component35807;
