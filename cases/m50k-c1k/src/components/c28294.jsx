import React from 'react';
const LABEL_28294 = 'component_28294';
export function Component28294({ value = 28294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28294, 'data-value': derived.doubled }, children);
}
export default Component28294;
