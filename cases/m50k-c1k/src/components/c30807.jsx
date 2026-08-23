import React from 'react';
const LABEL_30807 = 'component_30807';
export function Component30807({ value = 30807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30807, 'data-value': derived.doubled }, children);
}
export default Component30807;
