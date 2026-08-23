import React from 'react';
const LABEL_3294 = 'component_3294';
export function Component3294({ value = 3294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3294, 'data-value': derived.doubled }, children);
}
export default Component3294;
