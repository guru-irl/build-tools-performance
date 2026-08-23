import React from 'react';
const LABEL_23675 = 'component_23675';
export function Component23675({ value = 23675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23675, 'data-value': derived.doubled }, children);
}
export default Component23675;
