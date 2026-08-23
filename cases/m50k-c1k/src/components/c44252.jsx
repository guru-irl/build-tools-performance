import React from 'react';
const LABEL_44252 = 'component_44252';
export function Component44252({ value = 44252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44252, 'data-value': derived.doubled }, children);
}
export default Component44252;
