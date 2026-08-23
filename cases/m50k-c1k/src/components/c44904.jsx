import React from 'react';
const LABEL_44904 = 'component_44904';
export function Component44904({ value = 44904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44904, 'data-value': derived.doubled }, children);
}
export default Component44904;
