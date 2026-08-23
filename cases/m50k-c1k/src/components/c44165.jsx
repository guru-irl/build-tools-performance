import React from 'react';
const LABEL_44165 = 'component_44165';
export function Component44165({ value = 44165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44165, 'data-value': derived.doubled }, children);
}
export default Component44165;
