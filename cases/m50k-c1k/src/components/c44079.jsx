import React from 'react';
const LABEL_44079 = 'component_44079';
export function Component44079({ value = 44079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44079, 'data-value': derived.doubled }, children);
}
export default Component44079;
