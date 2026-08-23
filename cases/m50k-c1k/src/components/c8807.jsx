import React from 'react';
const LABEL_8807 = 'component_8807';
export function Component8807({ value = 8807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8807, 'data-value': derived.doubled }, children);
}
export default Component8807;
