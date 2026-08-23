import React from 'react';
const LABEL_12294 = 'component_12294';
export function Component12294({ value = 12294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12294, 'data-value': derived.doubled }, children);
}
export default Component12294;
