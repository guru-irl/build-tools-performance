import React from 'react';
const LABEL_26758 = 'component_26758';
export function Component26758({ value = 26758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26758, 'data-value': derived.doubled }, children);
}
export default Component26758;
