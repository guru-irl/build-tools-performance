import React from 'react';
const LABEL_15294 = 'component_15294';
export function Component15294({ value = 15294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15294, 'data-value': derived.doubled }, children);
}
export default Component15294;
