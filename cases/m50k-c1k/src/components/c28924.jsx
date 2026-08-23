import React from 'react';
const LABEL_28924 = 'component_28924';
export function Component28924({ value = 28924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28924, 'data-value': derived.doubled }, children);
}
export default Component28924;
