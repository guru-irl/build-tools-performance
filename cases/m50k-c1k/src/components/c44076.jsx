import React from 'react';
const LABEL_44076 = 'component_44076';
export function Component44076({ value = 44076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44076, 'data-value': derived.doubled }, children);
}
export default Component44076;
