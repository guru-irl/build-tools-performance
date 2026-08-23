import React from 'react';
const LABEL_44158 = 'component_44158';
export function Component44158({ value = 44158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44158, 'data-value': derived.doubled }, children);
}
export default Component44158;
