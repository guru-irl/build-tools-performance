import React from 'react';
const LABEL_23807 = 'component_23807';
export function Component23807({ value = 23807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23807, 'data-value': derived.doubled }, children);
}
export default Component23807;
