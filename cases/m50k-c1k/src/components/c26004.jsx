import React from 'react';
const LABEL_26004 = 'component_26004';
export function Component26004({ value = 26004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26004, 'data-value': derived.doubled }, children);
}
export default Component26004;
