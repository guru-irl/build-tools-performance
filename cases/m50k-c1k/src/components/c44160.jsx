import React from 'react';
const LABEL_44160 = 'component_44160';
export function Component44160({ value = 44160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44160, 'data-value': derived.doubled }, children);
}
export default Component44160;
