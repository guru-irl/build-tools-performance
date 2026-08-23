import React from 'react';
const LABEL_6807 = 'component_6807';
export function Component6807({ value = 6807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6807, 'data-value': derived.doubled }, children);
}
export default Component6807;
