import React from 'react';
const LABEL_44803 = 'component_44803';
export function Component44803({ value = 44803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44803, 'data-value': derived.doubled }, children);
}
export default Component44803;
