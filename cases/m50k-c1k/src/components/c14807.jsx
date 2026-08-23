import React from 'react';
const LABEL_14807 = 'component_14807';
export function Component14807({ value = 14807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14807, 'data-value': derived.doubled }, children);
}
export default Component14807;
