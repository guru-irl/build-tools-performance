import React from 'react';
const LABEL_28076 = 'component_28076';
export function Component28076({ value = 28076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28076, 'data-value': derived.doubled }, children);
}
export default Component28076;
