import React from 'react';
const LABEL_44675 = 'component_44675';
export function Component44675({ value = 44675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44675, 'data-value': derived.doubled }, children);
}
export default Component44675;
