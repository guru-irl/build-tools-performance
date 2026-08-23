import React from 'react';
const LABEL_28807 = 'component_28807';
export function Component28807({ value = 28807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28807, 'data-value': derived.doubled }, children);
}
export default Component28807;
