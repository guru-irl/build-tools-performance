import React from 'react';
const LABEL_12807 = 'component_12807';
export function Component12807({ value = 12807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12807, 'data-value': derived.doubled }, children);
}
export default Component12807;
