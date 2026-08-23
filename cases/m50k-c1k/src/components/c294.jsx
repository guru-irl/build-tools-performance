import React from 'react';
const LABEL_294 = 'component_294';
export function Component294({ value = 294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_294, 'data-value': derived.doubled }, children);
}
export default Component294;
