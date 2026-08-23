import React from 'react';
const LABEL_28904 = 'component_28904';
export function Component28904({ value = 28904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28904, 'data-value': derived.doubled }, children);
}
export default Component28904;
