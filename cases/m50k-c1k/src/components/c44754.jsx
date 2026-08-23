import React from 'react';
const LABEL_44754 = 'component_44754';
export function Component44754({ value = 44754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44754, 'data-value': derived.doubled }, children);
}
export default Component44754;
