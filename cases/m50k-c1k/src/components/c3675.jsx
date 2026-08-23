import React from 'react';
const LABEL_3675 = 'component_3675';
export function Component3675({ value = 3675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3675, 'data-value': derived.doubled }, children);
}
export default Component3675;
