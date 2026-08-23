import React from 'react';
const LABEL_22294 = 'component_22294';
export function Component22294({ value = 22294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22294, 'data-value': derived.doubled }, children);
}
export default Component22294;
